import { NextResponse, NextRequest } from "next/server";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import os from "os";
import Groq from "groq-sdk";
import fs from "fs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "File not found" }, { status: 400 });
  }

  // convert file to buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  // create a temporary file using os.tmpdir()
  const tempDir = os.tmpdir();
  // gen a unique filename to avoid collision
  const uniqueFileName = `${Date.now()}-${file.name}`;

  const tempFilePath = path.join(tempDir, uniqueFileName);

  try {
    // write the file to the temp directory
    await writeFile(tempFilePath, buffer);
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const transcription = await groq.audio.transcriptions.create({
      file: fs.createReadStream(tempFilePath),
      model: "whisper-large-v3",
      response_format: "json",
      language: "en",
      temperature: 0.0,
    });
    // delete the file after transcription
    if (tempFilePath) {
      await unlink(tempFilePath);
    }

    return NextResponse.json(transcription, { status: 200 });
  } catch (error) {
    console.log(error);
    // Cleanup if file was written
    try {
      await unlink(tempFilePath);
    } catch (e) {
      console.warn("File already deleted or not found:", e);
    }

    return NextResponse.json(
      { error: "Error during transcription" },
      { status: 500 }
    );
  }
}
