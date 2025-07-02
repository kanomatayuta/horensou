// src/app/page.tsx
"use client";

import { useState, ChangeEvent } from "react";
import { situations, Situation } from "../data/situations";

export default function Home() {
  const [selectedSituationId, setSelectedSituationId] = useState<string>("");
  const [currentResponses, setCurrentResponses] = useState<string[]>([]);

  const handleSituationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;
    setSelectedSituationId(id);

    const foundSituation: Situation | undefined = situations.find(
      (situation) => situation.id === id
    );

    setCurrentResponses(foundSituation ? foundSituation.responses : []);
  };

  const handleCopyResponse = (textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("返答をコピーしました！");
      })
      .catch((err) => {
        console.error("コピーに失敗しました:", err);
        alert("返答のコピーに失敗しました。");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* ここを「ほうれん草くん」に変更します */}
      <h1>ほうれん草くん</h1>

      <p>シチュエーションを選択してください:</p>
      <select
        value={selectedSituationId}
        onChange={handleSituationChange}
        style={{ padding: "8px", fontSize: "16px", minWidth: "200px" }}
      >
        <option value="">-- 選択してください --</option>
        {situations.map((situation: Situation) => (
          <option key={situation.id} value={situation.id}>
            {situation.label}
          </option>
        ))}
      </select>

      {currentResponses.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>返答:</h2>
          {currentResponses.map((res: string, index: number) => (
            <div
              key={index}
              style={{
                marginBottom: "15px",
                borderBottom: "1px dashed #eee",
                paddingBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {res}
              </p>
              <button
                onClick={() => handleCopyResponse(res)}
                style={{
                  padding: "8px 12px",
                  fontSize: "0.9em",
                  backgroundColor: "#0070f3",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                この返答をコピー
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
