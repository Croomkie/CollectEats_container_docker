using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OptionsPlatController : ControllerBase
    {
        private readonly IOptionsPlatService _optionsPlatService;

        public OptionsPlatController(IOptionsPlatService optionsPlatService)
        {
            _optionsPlatService = optionsPlatService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Optionsplat>> GetAll()
        {
            try
            {
                var optionsPlat = _optionsPlatService.GetAll();
                return Ok(optionsPlat);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Optionsplat> GetById([Required] int id)
        {
            try
            {
                var option = _optionsPlatService.GetById(id);
                if (option == null)
                {
                    return NotFound($"Option with ID {id} not found.");
                }
                return Ok(option);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddOption([FromBody] Optionsplat option)
        {
            if (option == null)
            {
                return BadRequest("Invalid Option data.");
            }

            try
            {
                _optionsPlatService.Add(option);
                return CreatedAtAction(nameof(AddOption), new { id = option.Id }, option);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Optionsplat option)
        {
            if (option == null || id != option.Id)
            {
                return BadRequest("Invalid Option data or mismatched ID.");
            }

            try
            {
                _optionsPlatService.Update(option);
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
                _optionsPlatService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
