(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{621:function(t,s,e){"use strict";e.r(s);var a=e(25),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tooling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tooling"}},[t._v("#")]),t._v(" Tooling")]),t._v(" "),e("p",[t._v("This README describe some useful tooling that you may need during development and testing.\nTo learn how to get started with your local development environment, read "),e("RouterLink",{attrs:{to:"/LocalDevelopment/"}},[t._v("our documentation")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"how-to-manually-test-payments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-manually-test-payments"}},[t._v("#")]),t._v(" How to manually test payments")]),t._v(" "),e("h3",{attrs:{id:"using-the-test-bitcoin-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-bitcoin-cli"}},[t._v("#")]),t._v(" Using the test bitcoin-cli")]),t._v(" "),e("p",[t._v("You can call bitcoin-cli inside the container with "),e("code",[t._v("docker exec")]),t._v(".\nFor example, if you want to send "),e("code",[t._v("0.23111090")]),t._v(" to "),e("code",[t._v("mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("./docker-bitcoin-cli.sh sendtoaddress "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.23111090")]),t._v("\n")])])]),e("p",[t._v("If you are using Powershell:")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitcoin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 sendtoaddress "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mohu16LH66ptoWGEL1GtP6KHTBJYXMWhEf"')]),t._v(" 0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("23111090\n")])])]),e("p",[t._v("You can also generate blocks:")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitcoin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("generate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 3\n")])])]),e("h3",{attrs:{id:"using-the-test-litecoin-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-litecoin-cli"}},[t._v("#")]),t._v(" Using the test litecoin-cli")]),t._v(" "),e("p",[t._v("Same as bitcoin-cli, but with "),e("code",[t._v(".\\docker-litecoin-cli.ps1")]),t._v(" and "),e("code",[t._v(".\\docker-litecoin-cli.sh")]),t._v(" instead.")]),t._v(" "),e("h3",{attrs:{id:"using-the-test-lightning-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-test-lightning-cli"}},[t._v("#")]),t._v(" Using the test lightning-cli")]),t._v(" "),e("p",[t._v("If you are using Linux:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("./docker-customer-lightning-cli.sh pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),e("p",[t._v("If you are using Powershell:")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("customer"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lightning"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cli")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ps1 pay lnbcrt100u1pd2e6uspp5ajnadvhazjrz55twd5k6yeg9u87wpw0q2fdr7g960yl5asv5fmnqdq9d3hkccqpxmedyrk0ehw5ueqx5e0r4qrrv74cewddfcvsxaawqz7634cmjj39sqwy5tvhz0hasktkk6t9pqfdh3edmf3z09zst5y7khv3rvxh8ctqqw6mwhh\n")])])]),e("p",[t._v("If you get this message:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Could not find a route"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"getroute_tries"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sendpay_tries"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Please, run the test "),e("code",[t._v("CanSetLightningServer")]),t._v(", this will establish a channel between the customer and the merchant, then, retry.")]),t._v(" "),e("p",[t._v("Alternatively you can run the "),e("code",[t._v("./docker-lightning-channel-setup.sh")]),t._v(" script to establish the channel connection.\nThe "),e("code",[t._v("./docker-lightning-channel-teardown.sh")]),t._v(" script closes any existing lightning channels.")]),t._v(" "),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("p",[e("code",[t._v("docker-compose up dev")]),t._v(" failed or tests are not passing, what should I do?")]),t._v(" "),e("ol",[e("li",[t._v("Run "),e("code",[t._v("docker-compose down --v")]),t._v(" (this will reset your test environment)")]),t._v(" "),e("li",[t._v("Run "),e("code",[t._v("docker-compose pull")]),t._v(" (this will ensure you have the lastest images)")]),t._v(" "),e("li",[t._v("Run again with "),e("code",[t._v("docker-compose up dev")])])]),t._v(" "),e("p",[t._v("If you still have issues, try to restart docker.")])])}),[],!1,null,null,null);s.default=n.exports}}]);