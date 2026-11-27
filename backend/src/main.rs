use axum::{routing::get, Json, Router};
use serde::Serialize;
use std::{env, net::SocketAddr};
use tower_http::trace::TraceLayer;

#[derive(Serialize)]
struct HealthResponse {
    status: &'static str,
    service: &'static str,
}

async fn health() -> Json<HealthResponse> {
    Json(HealthResponse {
        status: "ok",
        service: "embed-xplore-api",
    })
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();
    tracing_subscriber::fmt()
        .with_env_filter(
            env::var("RUST_LOG").unwrap_or_else(|_| "info".to_string()),
        )
        .init();

    let app = Router::new()
        .route("/api/health", get(health))
        .layer(TraceLayer::new_for_http());

    let host = env::var("APP_HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
    let port = env::var("APP_PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse::<u16>()
        .expect("APP_PORT must be a valid port");

    let address: SocketAddr = format!("{host}:{port}")
        .parse()
        .expect("APP_HOST and APP_PORT must form a valid socket address");

    let listener = tokio::net::TcpListener::bind(address)
        .await
        .expect("failed to bind API listener");

    tracing::info!("API listening on http://{address}");
    axum::serve(listener, app)
        .await
        .expect("API server failed");
}
