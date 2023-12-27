load("render.star", "render")
load("http.star", "http")

API_URL = "http://localhost:3999/message"

def main():
    rep = http.get(API_URL)
    if rep.status_code != 200:
        fail("Request failed with status %d", rep.status_code)

    message = rep.json()["message"]

    return render.Root(
	    delay = 120,
	    child = render.Marquee(
	        child = render.WrappedText(
	            content = rep.json()["message"],
	            width = 64
	        ),
	        scroll_direction = "vertical",
	        height = 32,
	    )
	)