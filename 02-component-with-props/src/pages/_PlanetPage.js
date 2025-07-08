import React, { createElement as h } from "../lib/react.js";
import { PlanetList } from "../components/planet/PlanetList.js";
import { PlanetItem } from "../components/planet/PlanetItem.js";
import { listData } from "../data/data.js";

// 3. PlanetPage 렌더링 하는 것
export function _PlanetPage () {
  return h(
    PlanetList,
    // {/* lang, cgildren */}
    {
      lang: "en",
      children: listData.items.map(({ id, title }) => h(PlanetItem, { key: id, id, title })
      ),
    }
  );
}
