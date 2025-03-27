(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{406:function(a,t,s){"use strict";s.r(t);var e=s(27),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-redhat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-redhat"}},[a._v("#")]),a._v(" Linux (RedHat)")]),a._v(" "),s("p",[a._v("This was verified working on Fedora 34, Alma Linux and Rocky Linux as of 1/Sep/2021. Should be fine with other Red Hat variants as well but not independantly verified.")]),a._v(" "),s("h2",{attrs:{id:"_1-update-your-repositories-and-packages-fully"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-update-your-repositories-and-packages-fully"}},[a._v("#")]),a._v(" 1 Update your repositories and packages fully:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf update\n")])])]),s("h2",{attrs:{id:"_2-install-necessary-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-necessary-dependencies"}},[a._v("#")]),a._v(" 2 Install necessary dependencies:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dnf "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nodejs gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-verify-correct-nodejs-version-needs-to-be-14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-correct-nodejs-version-needs-to-be-14"}},[a._v("#")]),a._v(" 3 Verify correct Nodejs version (needs to be 14+)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("node --version\n")])])]),s("h2",{attrs:{id:"_4-create-the-repository-for-mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-the-repository-for-mongodb"}},[a._v("#")]),a._v(" 4 Create the repository for MongoDB.")]),a._v(" "),s("p",[a._v("Of the Red Hat variants; currently only Red Hat Enterprise Linux, Alma Linux and Rocky Linux support MongoDB 5.0. Fedora is sadly dependency broken at this time with regards to MongoDB 5.0 and may or may not be resolved moving forward.")]),a._v(" "),s("h3",{attrs:{id:"_4-1-rhel-alma-rocky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-rhel-alma-rocky"}},[a._v("#")]),a._v(" 4.1 RHEL, Alma, Rocky:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/yum.repos.d/mongodb-org-5.0.repo\n")])])]),s("p",[a._v("Add the following content:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("mongodb-upstream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("MongoDB Upstream Repository\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("baseurl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://repo.mongodb.org/yum/redhat/8Server/mongodb-org/5.0/x86_64/\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgcheck")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("gpgkey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://www.mongodb.org/static/pgp/server-5.0.asc\n")])])]),s("h3",{attrs:{id:"_4-2-fedora-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-fedora-only"}},[a._v("#")]),a._v(" 4.2 Fedora only")]),a._v(" "),s("p",[a._v("sudo vim /etc/yum.repos.d/mongodb-org-4.4.repo")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\nAdd the following content:\n\n```bash\n[mongodb-upstream]\nname=MongoDB Upstream Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/8Server/mongodb-org/4.4/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc\n \n## 5 Install, start and make MongoDB persist reboots:\n\n```bash\nsudo dnf install mongodb-org\nsudo systemctl enable mongod --now\nsudo systemctl status mongod\n")])])]),s("h3",{attrs:{id:"_6-1-update-npm-to-the-latest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-update-npm-to-the-latest"}},[a._v("#")]),a._v(" 6.1 Update npm to the latest")]),a._v(" "),s("ul",[s("li",[a._v("Due to some update dependencies in V1.2+ we need to update our local npm version to the latest.")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo npm install npm@latest -g\n")])])]),s("h2",{attrs:{id:"_6-2-install-pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-install-pm2"}},[a._v("#")]),a._v(" 6.2 Install pm2:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pm2 -g\n")])])]),s("h2",{attrs:{id:"_7-obtain-and-start-octofarm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-obtain-and-start-octofarm"}},[a._v("#")]),a._v(" 7 Obtain and start OctoFarm")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --depth "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" https://github.com/OctoFarm/OctoFarm.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" OctoFarm/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" start\npm2 list\n")])])]),s("ul",[s("li",[a._v("You should see something similar to:")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[mnavarro@Fedora OctoFarm]$ pm2 list\n┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐\n│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │\n├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤\n│ 0  │ OctoFarm           │ fork     │ 0    │ online    │ 0%       │ 92.5mb   │\n└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘\n\n")])])]),s("h2",{attrs:{id:"_8-allow-traffic-on-port-4000-during-the-current-boot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-allow-traffic-on-port-4000-during-the-current-boot"}},[a._v("#")]),a._v(" 8 Allow traffic on port 4000 during the current boot:")]),a._v(" "),s("ul",[s("li",[a._v("By default OctoFarm runs on port 4000, adjust as required:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("/tcp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("/udp\n")])])]),s("h2",{attrs:{id:"_9-and-finally-with-one-additional-flag-to-make-it-persist-reboots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-and-finally-with-one-additional-flag-to-make-it-persist-reboots"}},[a._v("#")]),a._v(" 9 And finally with one additional flag to make it persist reboots")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("/udp --permanent\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("/tcp --permanent\n")])])]),s("p",[a._v('That\'s it. Navigate to <printer_ip>:4000 (example: "192.168.100.10:4000") in your browser and have a day!')]),a._v(" "),s("h2",{attrs:{id:"additional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional"}},[a._v("#")]),a._v(" Additional")]),a._v(" "),s("p",[a._v("OctoFarms service is fully controllable from the cli, and you can also action restarts from the UI. It is not setup as persistent as default to do so please check the following documentation:\n"),s("RouterLink",{attrs:{to:"/installation/setup-service.html"}},[a._v("Service Setup")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);