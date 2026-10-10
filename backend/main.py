from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl

app = FastAPI(title="SahneBul Studio API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Üretimde web alan adlarınla sınırlandır.
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class DownloadRequest(BaseModel):
    url: HttpUrl
    kind: str = "video"

class SceneScanRequest(BaseModel):
    video_id: str
    reference_image_id: str
    sensitivity: float = 0.42
    sample_interval_seconds: int = 6

@app.get("/health")
def health():
    return {"ok": True, "service": "sahnebul-api", "version": "0.1.0"}

@app.post("/api/downloads")
def create_download(req: DownloadRequest):
    # TODO: Kuyruk/iş sistemi, platform izinleri, dosya boyutu ve güvenlik kontrolleri ekle.
    # yt-dlp/FFmpeg masaüstündeki .exe dosyaları yerine sunucu ortamında kurulmalı.
    return {
        "status": "not_implemented",
        "message": "İndirme motoru henüz bağlanmadı.",
        "requested_kind": req.kind,
        "url": str(req.url),
    }

@app.post("/api/scene-scans")
def create_scene_scan(req: SceneScanRequest):
    # TODO: Güvenli dosya yükleme, iş kuyruğu, YuNet/SFace motoru ve sonuç deposu.
    return {
        "status": "not_implemented",
        "message": "Yüzle sahne bulma motoru henüz bağlanmadı.",
        "sample_interval_seconds": req.sample_interval_seconds,
        "sensitivity": req.sensitivity,
    }
