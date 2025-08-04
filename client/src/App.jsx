import { Button } from "@/components/ui/button";


import Search from "./Components/ui/Search/Search"

import DemoPage from "./Components/payments/page";


import Header from "./Components/ui/Header";


function App() {
  return (
    <>
    <Header/>
    <div className="flex min-h-svh flex-col items-center justify-center">

      <Search/>

      <Button>app</Button>
      <DemoPage></DemoPage>

    </div>
    </>
  );
}












export default App;
