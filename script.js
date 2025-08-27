body {
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    background: #00001a;
    cursor: none;
}
canvas {
    position: absolute; top: 0; left: 0; z-index: 1;
    background: #00001a;
    background-image:
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
        radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
}
.glowing-title {
    font-family: 'Playfair Display', serif;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.7), 0 0 35px rgba(0, 170, 255, 0.7), 0 0 50px rgba(0, 170, 255, 0.7);
}
#catcher-container {
    position: absolute; bottom: 20px; width: 150px; height: 60px; z-index: 20;
    pointer-events: none; display: flex; flex-direction: column; align-items: center;
}
#catcher-svg { filter: drop-shadow(0 0 15px #60a5fa); transition: filter 0.3s ease; }
.catcher-active #catcher-svg { animation: catch-glow-svg 0.4s ease-out; }
@keyframes catch-glow-svg { 50% { filter: drop-shadow(0 0 30px #a7c7e7); transform: scale(1.05); } }
.modal { backdrop-filter: blur(10px); }
.spinner {
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-left-color: #fde047;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.fortune-text-popup {
    position: absolute;
    z-index: 100;
    pointer-events: none;
    font-size: 1.25rem; /* 20px */
    font-weight: 600;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    animation: float-up-and-fade 3s ease-out forwards;
    white-space: nowrap;
}
@keyframes float-up-and-fade {
    0% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, -80px); opacity: 0; }
}
