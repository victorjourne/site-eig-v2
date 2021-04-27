export default {
  id: "dailymotion",
  label: "Dailymotion",
  fields: [{
      name: "shortcode",
      label: "Dailymotion Video ID",
      widget: "string"
  }],
  pattern: /{{< dailymotion ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
      return {
          shortcode: match[1]
      };
  },
  toBlock: function(obj) {
      return `{{< dailymotion ${obj.shortcode} >}}`;
  },
  toPreview: function(obj) {
      return `{{< dailymotion ${obj.shortcode} >}}`;
  },
}
