// The main difference between '||' and '&&' is that '||' means 'a || b', if a is not there then we do be, whereas 'a && b' means if a is true then only we do 'b'.

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (  // 'RootLayout' cause this is the way in React.
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'> {/* 'Nav' as we need it common in all the pages and then we pass children as props and use it */}
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;