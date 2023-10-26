using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HorairesOuvertureController : ControllerBase
    {
        private readonly IHorairesOuvertureService _horairesOuvertureService;

        public HorairesOuvertureController(IHorairesOuvertureService horairesOuvertureService)
        {
            _horairesOuvertureService = horairesOuvertureService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Horairesouverture>> GetAll()
        {
            try
            {
                var horairesOuverture = _horairesOuvertureService.GetAll();
                return Ok(horairesOuverture);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Horairesouverture> GetById([Required] int id)
        {
            try
            {
                var horaire = _horairesOuvertureService.GetById(id);
                if (horaire == null)
                {
                    return NotFound($"Horaire with ID {id} not found.");
                }
                return Ok(horaire);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddHoraire([FromBody] Horairesouverture horaire)
        {
            if (horaire == null)
            {
                return BadRequest("Invalid Horaire data.");
            }

            try
            {
                _horairesOuvertureService.Add(horaire);
                return CreatedAtAction(nameof(AddHoraire), new { id = horaire.Id }, horaire);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Horairesouverture horaire)
        {
            if (horaire == null || id != horaire.Id)
            {
                return BadRequest("Invalid Horaire data or mismatched ID.");
            }

            try
            {
                _horairesOuvertureService.Update(horaire);
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
                _horairesOuvertureService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
