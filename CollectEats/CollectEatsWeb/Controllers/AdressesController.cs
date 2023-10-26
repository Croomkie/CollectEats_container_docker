using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdressesController : ControllerBase
    {
        private readonly IAdressesService _adressesService;

        public AdressesController(IAdressesService adressesService)
        {
            _adressesService = adressesService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Adress>> GetAll()
        {
            try
            {
                var adresses = _adressesService.GetAll();
                return Ok(adresses);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Adress> GetById([Required] int id)
        {
            try
            {
                var adresse = _adressesService.GetById(id);
                if (adresse == null)
                {
                    return NotFound($"Adresse with ID {id} not found.");
                }
                return Ok(adresse);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddAdresse([FromBody] Adress adresse)
        {
            if (adresse == null)
            {
                return BadRequest("Invalid adresse data.");
            }

            try
            {
                _adressesService.Add(adresse);
                return CreatedAtAction(nameof(AddAdresse), new { id = adresse.Id }, adresse);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Adress adresse)
        {
            if (adresse == null || id != adresse.Id)
            {
                return BadRequest("Invalid adresse data or mismatched ID.");
            }

            try
            {
                _adressesService.Update(adresse);
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
                _adressesService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
