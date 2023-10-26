using CollectEats.Models;
using CollectEats.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace CollectEatsWeb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RestaurantsController : ControllerBase
    {
        private readonly IRestaurantsService _restaurantsService;

        public RestaurantsController(IRestaurantsService restaurantsService)
        {
            _restaurantsService = restaurantsService;
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Restaurant>> GetAll()
        {
            try
            {
                var restaurants = _restaurantsService.GetAll();
                return Ok(restaurants);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpGet("[action]")]
        public ActionResult<Restaurant> GetById([Required] int id)
        {
            try
            {
                var restaurant = _restaurantsService.GetById(id);
                if (restaurant == null)
                {
                    return NotFound($"Restaurant with ID {id} not found.");
                }
                return Ok(restaurant);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPost("[action]")]
        public IActionResult AddRestaurants([FromBody] Restaurant restaurant)
        {
            if (restaurant == null || string.IsNullOrEmpty(restaurant.Nom))
            {
                return BadRequest("Invalid restaurant data.");
            }

            try
            {
                _restaurantsService.Add(restaurant);
                return CreatedAtAction(nameof(AddRestaurants), new { id = restaurant.Id }, restaurant);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }

        [HttpPut("[action]")]
        public IActionResult Update([Required] int id, [FromBody] Restaurant restaurant)
        {
            if (restaurant == null || id != restaurant.Id)
            {
                return BadRequest("Invalid restaurant data or mismatched ID.");
            }

            try
            {
                _restaurantsService.Update(restaurant);
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
                _restaurantsService.Delete(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal server error: {e.Message}");
            }
        }
    }
}
