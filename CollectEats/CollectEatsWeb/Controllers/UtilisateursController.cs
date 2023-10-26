using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UtilisateursController : ControllerBase
    {
        private readonly IUtilisateursService _utilisateursService;

        public UtilisateursController(IUtilisateursService utilisateursService)
        {
            _utilisateursService = utilisateursService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Utilisateur>> GetAll()
        {
            try
            {
                var utilisateurs = _utilisateursService.GetAll();
                return Ok(utilisateurs);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Utilisateur> GetById([Required] int id)
        {
            try
            {
                var utilisateur = _utilisateursService.GetById(id);
                if (utilisateur == null)
                {
                    return NotFound($"Utilisateur with ID {id} not found.");
                }
                return Ok(utilisateur);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddUtilisateur([FromBody] Utilisateur utilisateur)
        {
            if (utilisateur == null)
            {
                return BadRequest("Invalid Utilisateur data.");
            }

            try
            {
                _utilisateursService.Add(utilisateur);
                return CreatedAtAction(nameof(AddUtilisateur), new { id = utilisateur.Id }, utilisateur);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Utilisateur utilisateur)
        {
            if (utilisateur == null || id != utilisateur.Id)
            {
                return BadRequest("Invalid Utilisateur data or mismatched ID.");
            }

            try
            {
                _utilisateursService.Update(utilisateur);
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
                _utilisateursService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
