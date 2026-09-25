export default function (feedingType: string): string {
  switch (feedingType) {
    case "BreastFeeding": {
      return "母乳";
    }
    case "ExpressedBreastMilk": {
      return "搾母乳";
    }
    case "Formula": {
      return "ミルク";
    }
    default: {
      return "不明";
    }
  }
}
