const sentenceDatabase = {
  "stage6": [
    {
      "jp_pro": "最新のADAS ECUソフトウェアにて、課題を検出しました。",
      "jp_simple": "新しいADAS ECUのソフトで、問題を見つけました。",
      "en_pro": "We've detected an issue with the latest ADAS ECU software.",
      "en_simple": "We found a problem with the new ADAS ECU software.",
      "rank": "S",
      "mainScene": "不具合・問題解決",
      "subScene": "不具合報告会議",
      "variations": [
        {
          "add_jp": "いつ？ -> 今朝, どのような？ -> 重大な",
          "jp_pro": "今朝、最新のADAS ECUソフトウェアにて重大な課題を検出しました。",
          "jp_simple": "今朝、新しいADAS ECUのソフトでヤバい問題を見つけました。",
          "en_pro": "This morning, we detected a critical issue with the latest ADAS ECU software.",
          "en_simple": "This morning, we found a serious problem with the new ADAS ECU software."
        },
        {
          "add_jp": "どこで？ -> テストベンチで, 誰が？ -> 我々のチームが",
          "jp_pro": "テストベンチにて、我々のチームが最新のADAS ECUソフトウェアの課題を検出しました。",
          "jp_simple": "テストベンチで、うちのチームが新しいADAS ECUのソフトの問題を見つけました。",
          "en_pro": "Our team detected an issue with the latest ADAS ECU software on the test bench.",
          "en_simple": "Our team found a problem with the new ADAS ECU software on the test bench."
        },
        {
          "add_jp": "いつ？ -> 最終テスト中に, どのような？ -> セキュリティの",
          "jp_pro": "最終テスト中に、最新のADAS ECUソフトウェアにてセキュリティの脆弱性を検出しました。",
          "jp_simple": "最終テストで、新しいADAS ECUのソフトにセキュリティの問題を見つけました。",
          "en_pro": "We detected a security vulnerability with the latest ADAS ECU software during the final test.",
          "en_simple": "We found a security problem with the new ADAS ECU software in the final test."
        },
        {
          "add_jp": "誰が？ -> 品質保証チームが, どのような？ -> 複数の軽微な",
          "jp_pro": "品質保証チームが、最新のADAS ECUソフトウェアにて複数の軽微な課題を報告しました。",
          "jp_simple": "QAチームが、新しいソフトでいくつかの小さい問題を報告しました。",
          "en_pro": "The QA team has reported multiple minor issues with the latest ADAS ECU software.",
          "en_simple": "The QA team reported some small problems with the new software."
        },
        {
          "add_jp": "いつ？ -> 昨日, どこで？ -> 結合フェーズで",
          "jp_pro": "昨日、結合フェーズにて最新のADAS ECUソフトウェアの課題を検出しました。",
          "jp_simple": "昨日、結合テストで新しいADAS ECUのソフトの問題を見つけました。",
          "en_pro": "Yesterday, we detected an issue with the latest ADAS ECU software during the integration phase.",
          "en_simple": "Yesterday, we found a problem with the new ADAS ECU software in the integration test."
        }
      ]
    }
  ],
  "stage8": [
    {
      "jp_pro": "そのファイルを送っていただけますか？",
      "jp_simple": "そのファイル、送ってくれますか？",
      "en_pro": "Could you send me the file?",
      "en_simple": "Can you send me the file?",
      "rank": "S",
      "mainScene": "レビュー・会議",
      "subScene": "設計レビューでの質疑応答",
      "variations": [
        {
          "add_jp": "何を？ -> テスト結果の, いつまでに？ -> 今日の終わりまでに",
          "jp_pro": "今日の終わりまでに、テスト結果のファイルを送っていただけますか？",
          "jp_simple": "今日中に、テスト結果のファイル送ってくれる？",
          "en_pro": "Could you send me the test result file by the end of the day?",
          "en_simple": "Can you send me the test result file by the end of today?"
        },
        {
          "add_jp": "何を？ -> 議事録を, なぜ？ -> レビューできるように",
          "jp_pro": "私がレビューできるように、議事録を送っていただけますか？",
          "jp_simple": "レビューしたいから、議事録送ってくれる？",
          "en_pro": "Could you send me the meeting minutes so that I can review it?",
          "en_simple": "Can you send me the minutes? I want to review it."
        },
        {
          "add_jp": "何を？ -> 更新された仕様書を, 誰に？ -> 我々のチームに",
          "jp_pro": "更新された仕様書を、我々のチームに送っていただけますか？",
          "jp_simple": "新しい仕様書、僕らのチームに送ってくれる？",
          "en_pro": "Could you send the updated specification to our team?",
          "en_simple": "Can you send the new spec to our team?"
        },
        {
          "add_jp": "何を？ -> 議事録を, いつまでに？ -> できるだけ早く",
          "jp_pro": "できるだけ早く、議事録を送っていただけますか？",
          "jp_simple": "なるべく早く、議事録送ってくれる？",
          "en_pro": "Could you send me the meeting minutes as soon as possible?",
          "en_simple": "Can you send me the minutes ASAP?"
        },
        {
          "add_jp": "なぜ？ -> 次の会議のために",
          "jp_pro": "次の会議のために、そのファイルを送っていただけますか？",
          "jp_simple": "次の会議で使うから、そのファイル送ってくれる？",
          "en_pro": "Could you send me the file for the next meeting?",
          "en_simple": "Can you send the file for the next meeting?"
        }
      ]
    }
  ]
};
