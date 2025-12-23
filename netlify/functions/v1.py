from app.main import app
from mangum import Mangum

# Explicit handler for Netlify
handler = Mangum(app, lifespan="off")
