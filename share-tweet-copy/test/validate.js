export const validate = {
  "tests": {
    "tweets": [
      {
        "description": "Valid Tweet: < 20 characters",
        "text": "I am a Tweet",
        "expected": true
      },
      {
        "description": "Valid Tweet: 140 characters",
        "text": "A lie gets halfway around the world before the truth has a chance to get its pants on. Winston Churchill (1874-1965) http://bit.ly/dJpywL",
        "expected": true
      },
      {
        "description": "Valid Tweet: 140 characters (with accents)",
        "text": "A lié géts halfway arøünd thé wørld béføré thé truth has a chance tø get its pants øn. Winston Churchill (1874-1965) http://bit.ly/dJpywL",
        "expected": true
      },
      {
        "description": "Valid Tweet: 140 characters (double byte characters)",
        "text": "のののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののののの",
        "expected": true
      },
      {
        "description": "Valid Tweet: 140 characters (double word characters)",
        "text": "🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱",
        "expected": true
      },
      {
        "description": "Invalid Tweet: no characters (empty)",
        "text": "",
        "expected": false
      },
      {
        "description": "Invalid Tweet: 141 characters",
        "text": "A lie gets halfway around the world before the truth has a chance to get its pants on. -- Winston Churchill (1874-1965) http://bit.ly/dJpywL",
        "expected": false
      },
      {
        "description": "Invalid Tweet: 141 characters (due to newline)",
        "text": "A lie gets halfway around the world before the truth has a chance to get its pants on. \n- Winston Churchill (1874-1965) http://bit.ly/dJpywL",
        "expected": false
      }
    // ],
    // "usernames": [
    //   {
    //     "description": "Valid username: a-z < 20 characters",
    //     "text": "@username",
    //     "expected": true
    //   },
    //   {
    //     "description": "All numeric username are allowed",
    //     "text": "@12345",
    //     "expected": true
    //   },
    //   {
    //     "description": "Usernames should allow the _ character",
    //     "text": "@example_name",
    //     "expected": true
    //   },
    //   {
    //     "description": "Usernames SHOULD NOT allow the - character",
    //     "text": "@example-name",
    //     "expected": false
    //   }
    // ],
    // "lists": [
    //   {
    //     "description": "Valid list: a-z < 20 characters",
    //     "text": "@username/list",
    //     "expected": true
    //   },
    //   {
    //     "description": "A username alone SHOULD NOT be considered a valid list",
    //     "text": "@username",
    //     "expected": false
    //   },
    //   {
    //     "description": "A username followed by a slash SHOULD NOT be considered a valid list",
    //     "text": "@username/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Validation SHOULD NOT allow leading spaces",
    //     "text": " @username/list",
    //     "expected": false
    //   },
    //   {
    //     "description": "Validation SHOULD NOT allow trailing spaces",
    //     "text": "@username/list ",
    //     "expected": false
    //   }
    // ],
    // "hashtags": [
    //   {
    //     "description": "Valid hashtag: a-z < 20 characters",
    //     "text": "#hashtag",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid hashtag: number followed by letters",
    //     "text": "#1st",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid hashtag: letters and numbers mixed",
    //     "text": "#that1time",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid hashtag: letter followed by numbers",
    //     "text": "#easyas123",
    //     "expected": true
    //   },
    //   {
    //     "description": "Invalid hashtag: all numbers",
    //     "text": "#12345",
    //     "expected": false
    //   },
    //   {
    //     "description": "Valid hashtag: Russian text",
    //     "text": "#ашок",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid hashtag: Korean text",
    //     "text": "#트위터",
    //     "expected": true
    //   }
    // ],
    // "urls": [
    //   {
    //     "description": "Valid url: protocol + domain",
    //     "text": "http://example.com",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: ssl + domain + path + query",
    //     "text": "https://example.com/path/to/resource?search=foo&lang=en",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: protocol + domain + path + fragment",
    //     "text": "http://twitter.com/#!/twitter",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: cased protocol and domain",
    //     "text": "HTTPS://www.ExaMPLE.COM/index.html",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: port and userinfo",
    //     "text": "http://user:PASSW0RD@example.com:8080/login.php",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: matrix path parameters",
    //     "text": "http://sports.yahoo.com/nfl/news;_ylt=Aom0;ylu=XyZ?slug=ap-superbowlnotebook",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: ipv4",
    //     "text": "http://192.168.0.1/index.html?src=asdf",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: ipv6",
    //     "text": "http://[3ffe:1900:4545:3:200:f8ff:fe21:67cf]:80/index.html",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: underscore in subdomain",
    //     "text": "http://test_underscore.twitter.com",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: sub delims and question marks",
    //     "text": "http://example.com?foo=$bar.;baz?BAZ&c=d-#top/?stories+",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid unicode url: unicode domain",
    //     "text": "http://☃.net/",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: Cyrillic characters in path",
    //     "text": "http://example.com/Русские_слова",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url: trailing hyphen",
    //     "text": "https://www.youtube.com/playlist?list=PL0ZPu8XSRTB7wZzn0mLHMvyzVFeRxbWn-",
    //     "expected": true
    //   },
    //   {
    //     "description": "Invalid url: invalid scheme",
    //     "text": "ftp://www.example.com/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: invalid userinfo characters",
    //     "text": "https://user:pass[word]@www.example.com/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: underscore in domain",
    //     "text": "http://domain-dash_2314352345_dfasd.foo-cow_4352.com",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: domain beginning dash",
    //     "text": "http://www.-domain4352.com/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: domain trailing dash",
    //     "text": "http://www.domain4352-.com/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: unicode domain trailing dash",
    //     "text": "http://☃-.net/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: improperly encoded unicode domain",
    //     "text": "http://%e2%98%83.net/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: invalid IP",
    //     "text": "http://256.1.2.3/",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: invalid char in path",
    //     "text": "http://en.wikipedia.org/wiki/\"#Punctuation",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: trailing space",
    //     "text": "http://example.com/#anchor ",
    //     "expected": false
    //   },
    //   {
    //     "description": "Invalid url: domain has leading hyphen",
    //     "text": "http://test.-twitter.com",
    //     "expected": false
    //   }
    // ],
    // "urls_without_protocol": [
    //   {
    //     "description": "Valid url without protocol: domain + gTLD",
    //     "text": "example.com",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url without protocol: subdomain + domain + gTLD",
    //     "text": "www.example.com",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url without protocol: domain + ccTLD",
    //     "text": "t.co",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url without protocol: subdomain + domain + ccTLD",
    //     "text": "foo.co.jp",
    //     "expected": true
    //   },
    //   {
    //     "description": "Valid url without protocol: domain + path + query",
    //     "text": "example.com/path/to/resource?search=foo&lang=en",
    //     "expected": true
    //   }
    // ],
    // "WeightedTweetsCounterTest": [
    //   {
    //     "description": "Regular Tweet with url",
    //     "text": "Hi http://test.co",
    //     "expected": {
    //       "weightedLength": 26,
    //       "valid": true,
    //       "permillage": 92,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 16,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 16
    //     }
    //   },
    //   {
    //     "description": "Just url",
    //     "text": "http://test.co",
    //     "expected": {
    //       "weightedLength": 23,
    //       "valid": true,
    //       "permillage": 82,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 13,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 13
    //     }
    //   },
    //   {
    //     "description": "Long tweet, overflow at char index 280",
    //     "text": "285 chars-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-",
    //     "expected": {
    //       "weightedLength": 285,
    //       "valid": false,
    //       "permillage": 1017,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 284,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "Long tweet with url in the middle, overflow at char index 284",
    //     "text": "285 chars- http://www.twitter.com/jack xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-",
    //     "expected": {
    //       "weightedLength": 299,
    //       "valid": false,
    //       "permillage": 1067,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 302,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 283
    //     }
    //   },
    //   {
    //     "description": "Long tweet with url at the end, overflow at char index 265",
    //     "text": "xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx- http://www.twitter.com/jack ",
    //     "expected": {
    //       "weightedLength": 289,
    //       "valid": false,
    //       "permillage": 1032,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 292,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 264
    //     }
    //   },
    //   {
    //     "description": "10 url string, no overflow",
    //     "text": "https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha ",
    //     "expected": {
    //       "weightedLength": 240,
    //       "valid": true,
    //       "permillage": 857,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 299,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 299
    //     }
    //   },
    //   {
    //     "description": "160 CJK char, overflow at char index 140",
    //     "text": "故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。泪湿罗巾梦不成，夜深前殿按歌声。红颜未老恩先断，斜倚薰笼坐到明。独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
    //     "expected": {
    //       "weightedLength": 320,
    //       "valid": false,
    //       "permillage": 1142,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 159,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 139
    //     }
    //   },
    //   {
    //     "description": "160 emoji char, overflow at char index 140",
    //     "text": "😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷",
    //     "expected": {
    //       "weightedLength": 320,
    //       "valid": false,
    //       "permillage": 1142,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 319,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "3 latin char + 160 CJK char, overflow at char index 141",
    //     "text": "the故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。泪湿罗巾梦不成，夜深前殿按歌声。红颜未老恩先断，斜倚薰笼坐到明。独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
    //     "expected": {
    //       "weightedLength": 323,
    //       "valid": false,
    //       "permillage": 1153,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 162,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 140
    //     }
    //   },
    //   {
    //     "description": "'Á' is normalized into 1 char",
    //     "text": "ÁB",
    //     "expected": {
    //       "weightedLength": 2,
    //       "valid": true,
    //       "permillage": 7,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 2,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 2
    //     }
    //   },
    //   {
    //     "description": "שּׁ is normalized into 3 chars",
    //     "text": "Aשּׁ",
    //     "expected": {
    //       "weightedLength": 4,
    //       "valid": true,
    //       "permillage": 14,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 1,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 1
    //     }
    //   },
    //   {
    //     "description": "282 chars with a normalized character within valid range but outside 280",
    //     "text": "282 chars-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxÁx",
    //     "expected": {
    //       "weightedLength": 281,
    //       "valid": false,
    //       "permillage": 1003,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 281,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 280
    //     }
    //   },
    //   {
    //     "description": "Count a mix of single byte single word, and double word unicode characters",
    //     "text": "H🐱☺👨‍👩‍👧‍👦",
    //     "expected": {
    //       "weightedLength": 16,
    //       "valid": true,
    //       "permillage": 57,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 14,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 14
    //     }
    //   },
    //   {
    //     "description": "Count unicode emoji chars inside the basic multilingual plane",
    //     "text": "😷👾😡🔥💩",
    //     "expected": {
    //       "weightedLength": 10,
    //       "valid": true,
    //       "permillage": 35,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 9,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 9
    //     }
    //   },
    //   {
    //     "description": "Count unicode emoji chars outside the basic multilingual plane with skin tone modifiers",
    //     "text": "🙋🏽👨‍🎤",
    //     "expected": {
    //       "weightedLength": 9,
    //       "valid": true,
    //       "permillage": 32,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 8,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 8
    //     }
    //   },
    //   {
    //     "description": "Handle General Punctuation Characters with visible spaces(u2000-200A)",
    //     "text": "This is a tweet with general punctuation characters:            ​‌‍ ‐ ‑ ‒ – — ― ‖  ‗ ‘ ’ ‚ ‛ “ ” „ ‟ ′ ″ ‴ ‵ ‶ ‷",
    //     "expected": {
    //       "weightedLength": 112,
    //       "valid": true,
    //       "permillage": 400,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 111,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 111
    //     }
    //   },
    //   {
    //     "description": "Handle long url with invalid domain labels and short url",
    //     "text": "Long url with invalid domain labels and a short url: https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://validurl.com",
    //     "expected": {
    //       "weightedLength": 12079,
    //       "valid": false,
    //       "permillage": 43139,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 12075,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "Handle a 64 character domain without protocol",
    //     "text": "randomurlrandomurlrandomurlrandomurlrandomurlrandomurlrandomurls.com",
    //     "expected": {
    //       "weightedLength": 68,
    //       "valid": true,
    //       "permillage": 242,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 67,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 67
    //     }
    //   },
    //   {
    //     "description": "Do not allow > 140 CJK characters by virtue of CJK chars greater than 63 punycode encoded chars in the host",
    //     "text": "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ http://あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいう.com",
    //     "expected": {
    //       "weightedLength": 358,
    //       "valid": false,
    //       "permillage": 1278,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 184,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 143
    //     }
    //   },
    //   {
    //     "description": "Allow > 140 CJK characters by virtue of CJK chars less than 63 punycode encoded chars in the host",
    //     "text": "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ http://あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあい.com",
    //     "expected": {
    //       "weightedLength": 264,
    //       "valid": true,
    //       "permillage": 942,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 183,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 183
    //     }
    //   }
    // ],
    // "WeightedTweetsWithDiscountedEmojiCounterTest": [
    //   {
    //     "description": "Regular Tweet with url",
    //     "text": "Hi http://test.co",
    //     "expected": {
    //       "weightedLength": 26,
    //       "valid": true,
    //       "permillage": 92,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 16,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 16
    //     }
    //   },
    //   {
    //     "description": "Just url",
    //     "text": "http://test.co",
    //     "expected": {
    //       "weightedLength": 23,
    //       "valid": true,
    //       "permillage": 82,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 13,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 13
    //     }
    //   },
    //   {
    //     "description": "Long tweet, overflow at char index 280",
    //     "text": "285 chars-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-",
    //     "expected": {
    //       "weightedLength": 285,
    //       "valid": false,
    //       "permillage": 1017,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 284,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "Long tweet with url in the middle, overflow at char index 284",
    //     "text": "285 chars- http://www.twitter.com/jack xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-",
    //     "expected": {
    //       "weightedLength": 299,
    //       "valid": false,
    //       "permillage": 1067,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 302,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 283
    //     }
    //   },
    //   {
    //     "description": "Long tweet with url at the end, overflow at char index 265",
    //     "text": "xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx- http://www.twitter.com/jack ",
    //     "expected": {
    //       "weightedLength": 289,
    //       "valid": false,
    //       "permillage": 1032,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 292,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 264
    //     }
    //   },
    //   {
    //     "description": "10 url string, no overflow",
    //     "text": "https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha https://www.twitter.com/aloha ",
    //     "expected": {
    //       "weightedLength": 240,
    //       "valid": true,
    //       "permillage": 857,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 299,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 299
    //     }
    //   },
    //   {
    //     "description": "160 CJK char, overflow at char index 140",
    //     "text": "故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。泪湿罗巾梦不成，夜深前殿按歌声。红颜未老恩先断，斜倚薰笼坐到明。独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
    //     "expected": {
    //       "weightedLength": 320,
    //       "valid": false,
    //       "permillage": 1142,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 159,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 139
    //     }
    //   },
    //   {
    //     "description": "160 emoji char, overflow at char index 140",
    //     "text": "😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷😷",
    //     "expected": {
    //       "weightedLength": 320,
    //       "valid": false,
    //       "permillage": 1142,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 319,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "3 latin char + 160 CJK char, overflow at char index 141",
    //     "text": "the故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。朱雀桥边野草花，乌衣巷口夕阳斜。旧时王谢堂前燕，飞入寻常百姓家。朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。泪湿罗巾梦不成，夜深前殿按歌声。红颜未老恩先断，斜倚薰笼坐到明。独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
    //     "expected": {
    //       "weightedLength": 323,
    //       "valid": false,
    //       "permillage": 1153,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 162,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 140
    //     }
    //   },
    //   {
    //     "description": "282 chars with a normalized character within valid range but outside 280",
    //     "text": "282 chars-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxxxxxx-xxxxxÁx",
    //     "expected": {
    //       "weightedLength": 281,
    //       "valid": false,
    //       "permillage": 1003,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 281,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 280
    //     }
    //   },
    //   {
    //     "description": "Count a mix of single byte single word, and double word unicode characters",
    //     "text": "H🐱☺👨‍👩‍👧‍👦",
    //     "expected": {
    //       "weightedLength": 7,
    //       "valid": true,
    //       "permillage": 25,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 14,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 14
    //     }
    //   },
    //   {
    //     "description": "Count unicode emoji chars inside the basic multilingual plane",
    //     "text": "😷👾😡🔥💩",
    //     "expected": {
    //       "weightedLength": 10,
    //       "valid": true,
    //       "permillage": 35,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 9,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 9
    //     }
    //   },
    //   {
    //     "description": "Count unicode emoji chars outside the basic multilingual plane with skin tone modifiers",
    //     "text": "🙋🏽👨‍🎤",
    //     "expected": {
    //       "weightedLength": 4,
    //       "valid": true,
    //       "permillage": 14,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 8,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 8
    //     }
    //   },
    //   {
    //     "description": "Handle General Punctuation Characters with visible spaces(u2000-200A), no ZWJ/ZWNJ",
    //     "text": "This is a tweet with general punctuation characters:            ​ ‐ ‑ ‒ – — ― ‖  ‗ ‘ ’ ‚ ‛ “ ” „ ‟ ′ ″ ‴ ‵ ‶ ‷",
    //     "expected": {
    //       "weightedLength": 110,
    //       "valid": true,
    //       "permillage": 392,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 109,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 109
    //     }
    //   },
    //   {
    //     "description": "Handle long url with invalid domain labels and short url",
    //     "text": "Long url with invalid domain labels and a short url: https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://somesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurlsomesuperlongurl.com/foo https://validurl.com",
    //     "expected": {
    //       "weightedLength": 12079,
    //       "valid": false,
    //       "permillage": 43139,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 12075,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 279
    //     }
    //   },
    //   {
    //     "description": "Handle a 64 character domain without protocol",
    //     "text": "randomurlrandomurlrandomurlrandomurlrandomurlrandomurlrandomurls.com",
    //     "expected": {
    //       "weightedLength": 68,
    //       "valid": true,
    //       "permillage": 242,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 67,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 67
    //     }
    //   },
    //   {
    //     "description": "Do not allow > 140 CJK characters by virtue of CJK chars greater than 63 punycode encoded chars in the host",
    //     "text": "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ http://あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいう.com",
    //     "expected": {
    //       "weightedLength": 358,
    //       "valid": false,
    //       "permillage": 1278,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 184,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 143
    //     }
    //   },
    //   {
    //     "description": "Allow > 140 CJK characters by virtue of CJK chars less than 63 punycode encoded chars in the host",
    //     "text": "あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ http://あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあい.com",
    //     "expected": {
    //       "weightedLength": 264,
    //       "valid": true,
    //       "permillage": 942,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 183,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 183
    //     }
    //   },
    //   {
    //     "description": "140 family emoji",
    //     "text": "👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦",
    //     "expected": {
    //       "weightedLength": 280,
    //       "valid": true,
    //       "permillage": 1000,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 1539,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 1539
    //     }
    //   },
    //   {
    //     "description": "Emoji with a leading character in the latin range is counted as 2",
    //     "text": "1⃣",
    //     "expected": {
    //       "weightedLength": 2,
    //       "valid": true,
    //       "permillage": 7,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 1,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 1
    //     }
    //   },
    //   {
    //     "description": "Unicode 10.0 emoji",
    //     "text": "Unicode 10.0 emoji: 🤪; 🧕; 🧕🏾; 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    //     "expected": {
    //       "weightedLength": 34,
    //       "valid": true,
    //       "permillage": 121,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 47,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 47
    //     }
    //   },
    //   {
    //     "description": "Unicode 9.0 emoji",
    //     "text": "Unicode 9.0 emoji: 🤠; 💃; 💃🏾",
    //     "expected": {
    //       "weightedLength": 29,
    //       "valid": true,
    //       "permillage": 103,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 30,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 30
    //     }
    //   }
    // ],
    // "UnicodeDirectionalMarkerCounterTest": [
    //   {
    //     "description": "Handle invalid characters",
    //     "text": "ABC‪￿ABC￾",
    //     "expected": {
    //       "weightedLength": 12,
    //       "valid": false,
    //       "permillage": 42,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 8,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 3
    //     }
    //   },
    //   {
    //     "description": "Tweet text containing directional characters should be considered valid",
    //     "text": "⁦‪http://foobar.پاکستان/‬⁩",
    //     "expected": {
    //       "weightedLength": 31,
    //       "valid": true,
    //       "permillage": 110,
    //       "displayRangeStart": 0,
    //       "displayRangeEnd": 25,
    //       "validRangeStart": 0,
    //       "validRangeEnd": 25
    //     }
    //   }
    ]
  }
}