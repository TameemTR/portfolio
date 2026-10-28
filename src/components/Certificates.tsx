import fs from "node:fs";
import path from "node:path";
import CertificatesSlider from "./CertificatesSlider";

const ALLOWED = [".png", ".jpg", ".jpeg", ".webp", ".pdf"];

export default function Certificates() {
  const dir = path.join(process.cwd(), "public", "certificates");
  let files: string[] = [];

  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => ALLOWED.includes(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/certificates/${encodeURIComponent(f)}`);
  } catch {
    files = [];
  }

  return <CertificatesSlider files={files} />;
}