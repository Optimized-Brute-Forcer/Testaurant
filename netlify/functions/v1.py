from app.main import app
from mangum import Mangum

# Explicit handler for Netlify with lifespan enabled for DB connection
# We use api_gateway_base_path to handle the /api prefix from redirects
handler = Mangum(app, lifespan="on", api_gateway_base_path="/api")

@app.get("/test-path")
async def test_path():
    return {"message": "V1 path routing is working!"}

@app.get("/debug")
async def debug_event(event: dict = None):
    return {"message": "Debug event", "event": event}
