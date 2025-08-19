import Divider from '@/components/Divider';
import Counter from '@/miniApp/Counter';
import Counter_ from '@/miniApp/Counter/index_';
import AppLink from '@/pages/Home/AppLink';
// import { Helmet } from '@dr.pogodin/react-helmet';

const htmlTag = (
  <>
    <title>앱 글로벌 상태 관리 with Zustand</title>
    <meta
      name="description"
      content="Zustand를 사용하면 Context, useReducer, useState 없이 보다 횩허적으로,
          더 빠르게, 더 가볍게 상태를 관리할 수 있습니다."
    />
    <meta property="og:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="twitter:title" content="범쌤과 함께 배우는 Zustand" />
    <meta property="og:type" content="site" />
    <meta property="og:url" content="https://github.com/sikchang" />

    <meta
      property="og:description"
      content="Front-end 개발자를 꿈꾸는 자들이여 범쌤에게 오라!"
    />

    <meta
      property="og:image"
      content="data:image/png;base64,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"
    />
    <meta property="og:site:author" content="sikchang" />
  </>
);


function Home() {
  return (
    <>
      <section id="page">
        {htmlTag}

        {/* <Helmet>

        </Helmet> */}

        <div className="learn">
          <h1>웹 글로벌 상태 관리 with Zustand</h1>

          <p>
            <AppLink
              href="https://zustand.docs.pmnd.rs/getting-started/introduction"
              isExternal
              className="text-red-500">
              Zustand
            </AppLink>{" "}
            라이브러리를 사용해 앱 또는 컴포넌트의 상태를 효과적으로 관리하는
            방법을 학습합니다.
          </p>

          <Divider />

          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 CustomHook을 사용해 관리합니다.</p>

          <Counter_ />

          <Divider />

          <h2 lang="en" className="uppercase">
            Counter
          </h2>
          <p>간단한 카운터 앱의 상태를 Zustand을 사용해 관리합니다.</p>

          <Counter />

        </div>
      </section>
    </>
  );
}

export default Home;
