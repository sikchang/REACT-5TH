// import Playground from '@/components/Playground';
import ChatCard from '@/components/ChatCard';
import './style/style.css';
import ProfileCard from '@/components/ProfileCard';
import Profile from '@/components/Profile';
import Button_twMerge from '@/components/Button_twMerge';
import Button_clsx from '@/components/Button_clsx';
import Button_tw from '@/components/Button_tw';
import Button_cva from '@/components/Button_cva';
import Card from '@/components/Card';


function App() {
  return (
    <div>
      <h1 className="flex justify-center items-center bg-indigo-500 text-white px-4 py-4">
        hello tailwind
      </h1>

      <hr className="my-5" />

      {/* <Playground /> */}

      <ChatCard />

      <hr className="my-5" />

      <ProfileCard />

      <hr className="my-5" />

      <Profile />

      <hr className="my-5" />

      <Button_twMerge type="primary" className="bg-red-500">
        CTA to Action
      </Button_twMerge>

      <hr className="my-5" />

      <Button_clsx size="sm" className="bg-orange-500">
        Call to Action
      </Button_clsx>

      <hr className="my-5" />

      <Button_tw size="lg" disabled className="bg-emerald-500">
        Call to Action
      </Button_tw>

      <hr className="my-5" />

      <Button_cva
        intent="secondary"
        block
        size="md"
        className="bg-indigo-500"
        loading={true}>
        Call to Action
      </Button_cva>

      <hr className="my-5" />

      <Button_cva
        intent="primary"
        block
        size="lg"
        className="text-6xl"
        loading={true}>
        Call to Action
      </Button_cva>

      <hr className="my-5" />

      <Button_cva>Call to Action</Button_cva>

      <hr className="my-5" />

      <Card
        type="primary"
        logoSrc="/facebook.svg"
        rate="$120/hr"
        title="Senior UI Developer"
        company="Facebook"
      />

      <Card
        type="secondary"
        logoSrc="/google.svg"
        rate="$120/hr"
        title="Senior UI Developer"
        company="Google"
      />

      <Card
        type="tertiary"
        logoSrc="/airbnb.svg"
        rate="$120/hr"
        title="Senior UI Developer"
        company="Airbnb"
      />
    </div>
  );
}
export default App
