using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using VueProject.Models;

namespace VueProject.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Watch()
		{
			return View();
		}

		public IActionResult Computed()
		{
			return View();
		}

		public IActionResult AttributeBind()
		{
			return this.View();
		}

		public IActionResult InlineStyle()
		{
			return this.View();
		}

		public IActionResult FormBinding()
		{
			return this.View();
		}

		public IActionResult EventVue()
		{
			return this.View();
		}

		public IActionResult EventModifier()
		{
			return this.View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		public IActionResult V_IF()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}