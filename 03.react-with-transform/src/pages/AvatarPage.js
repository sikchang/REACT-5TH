import React, { createElement as h } from "../lib/react.js";
import AvatarItem from "../components/avatar/AvatarItem.js";

export default function AvatarPage() {
    return h(
      "ul",
      { className: "avatarList" },
      h(AvatarItem,{name:'짱구',status:'online'}),
      h(AvatarItem,{name:'원장',status:'dont-disturb'}),
      h(AvatarItem,{name:'봉미선',status:'offline'}),
      h(AvatarItem,{name:'유리',status:'away'})
    );
}
