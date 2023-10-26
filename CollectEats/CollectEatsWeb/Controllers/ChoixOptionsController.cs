using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChoixOptionsController : ControllerBase
    {
        private readonly IChoixOptionsService _choixOptionsService;

        public ChoixOptionsController(IChoixOptionsService choixOptionsService)
        {
            _choixOptionsService = choixOptionsService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Choixoption>> GetAll()
        {
            try
            {
                var choixOptions = _choixOptionsService.GetAll();
                return Ok(choixOptions);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Choixoption> GetById([Required] int id)
        {
            try
            {
                var choixOption = _choixOptionsService.GetById(id);
                if (choixOption == null)
                {
                    return NotFound($"ChoixOption with ID {id} not found.");
                }
                return Ok(choixOption);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddChoixOption([FromBody] Choixoption choixOption)
        {
            if (choixOption == null)
            {
                return BadRequest("Invalid ChoixOption data.");
            }

            try
            {
                _choixOptionsService.Add(choixOption);
                return CreatedAtAction(nameof(AddChoixOption), new { id = choixOption.Id }, choixOption);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Choixoption choixOption)
        {
            if (choixOption == null || id != choixOption.Id)
            {
                return BadRequest("Invalid ChoixOption data or mismatched ID.");
            }

            try
            {
                _choixOptionsService.Update(choixOption);
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
                _choixOptionsService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
