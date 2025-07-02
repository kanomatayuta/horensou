// src/data/situations.ts

export interface Situation {
  id: string;
  label: string;
  responses: string[]; // response を responses (複数形) に変更し、文字列の配列にする
}

export const situations: Situation[] = [
  {
    id: "late",
    label: "遅刻",
    responses: [
      "電話者遅延のため到着が遅れます。",
      "電車が遅延しており、到着が〇分ほど遅れる見込みです。",
      "交通渋滞のため、到着が遅れます。申し訳ございません。",
    ],
  },
  {
    id: "meeting-prep",
    label: "会議準備中",
    responses: [
      "現在、会議の準備中です。",
      "会議資料を作成中です。",
      "会議の最終確認を行っています。",
    ],
  },
  {
    id: "out-of-office",
    label: "外出中",
    responses: [
      "現在、外出中です。〇時頃に戻ります。",
      "〇〇の打ち合わせのため、外出しております。",
      "本日、終日外出しております。",
    ],
  },
  {
    id: "sick",
    label: "体調不良",
    responses: [
      "体調不良のため、本日はお休みをいただきます。",
      "発熱のため、本日は自宅療養いたします。",
      "体調が優れないため、本日はリモートワークとさせていただきます。",
    ],
  },
  {
    id: "break",
    label: "休憩中",
    responses: [
      "現在、休憩中です。",
      "少し席を外しております。",
      "10分ほど休憩をいただいております。",
    ],
  },
  {
    id: "urgent-task",
    label: "緊急対応中",
    responses: [
      "緊急のタスク対応中です。",
      "至急対応が必要な案件に取り組んでおります。",
      "現在、緊急連絡が入っており、対応中です。",
    ],
  },
];
