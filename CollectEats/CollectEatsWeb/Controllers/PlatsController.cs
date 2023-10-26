using CollectEats.DTOs;
using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlatsController : ControllerBase
    {
        private readonly IPlatsService _platsService;

        public PlatsController(IPlatsService platsService)
        {
            _platsService = platsService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Plat>> GetAll()
        {
            try
            {
                var plats = _platsService.GetAll();
                return Ok(plats);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Plat>> GetAllOfRestaurant([Required] int id)
        {
            try
            {
                var platsRestaurant = _platsService.GetAllOfRestaurant(id);
                return Ok(platsRestaurant);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Plat> GetById([Required] int id)
        {
            try
            {
                var plat = _platsService.GetById(id);
                if (plat == null)
                {
                    return NotFound($"Plat with ID {id} not found.");
                }
                return Ok(plat);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddPlat([FromBody] AddPlatRequest request)
        {
            if (request == null)
            {
                return BadRequest("Invalid Plat data.");
            }

            try
            {
                Plat plat = new()
                {
                    Nomplat = request.Nomplat,
                    Description = request.Description,
                    Prixbase = request.Prixbase,
                    Choixoptionid = request.Choixoptionid,
                    Restaurantid = request.Restaurantid
                };

                _platsService.Add(plat);

                return CreatedAtAction(nameof(AddPlat), new { id = plat.Id }, plat);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }


        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Plat plat)
        {
            if (plat == null || id != plat.Id)
            {
                return BadRequest("Invalid Plat data or mismatched ID.");
            }

            try
            {
                _platsService.Update(plat);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpDelete("[action]")]
        public IActionResult Delete([Required] int id)
        {
            try
            {
                _platsService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
