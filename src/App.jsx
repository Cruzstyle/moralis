import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import  SearchCollection from "components/SearchCollection";
import 'antd/dist/antd.min.css'
import NativeBalance from "components/NativeBalance";
import "./style.css";
import "./stylee.css";
import "./elementoriconsmin.css";
import "./style1.css";
import "./post.css";
import "./fontFamily.css";
import "./external.css";
import "./post6.css";
import "./iconsmind.css";
import "./frontend.css";
import "./frontendlegacy.css";
import "./stylemin.css";
import "./post10988.css";
import "./post84115.css";
import "./stylemin6.css";
import "./shimsmin.css";
import "./default.css";
import "./enlighterjs.css";
import "./animations.css";
import "./prettyphoto.css";
import "./post18942.css";
import "./fontawesome.css";
import "./post26397.css";
import "./ecsstyle.css";
import "./pluspreloader.css";
import "./frontendmin.css";
import "./global.css";
import "./brands.css";
import "./allmin.css";
import "./styleinstances.css";
import "./thememin.css";
import "./post82975.css";
import "./post92247.css";
import "./pafrontend53f0f9e79.css";
import "./post69875.css";


import Text from "antd/lib/typography/Text";
import MediaQuery from 'react-responsive'
import { Navbar } from 'responsive-navbar-react'
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "40px",
    padding: "10px",
    marginLeft:"25px",
  },
  header: {
    position: "sticky",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    position: "auto",
  },
  headerRight1: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
    fontSize: "9.5px",
    fontWeight: "200",
    position: "relative",
  },
};
const App = () => {
  const { isWeb3Enabled, enableWeb3,  authenticate, isAuthenticated, user, isWeb3EnableLoading } =
    useMoralis();

const handleMediaQueryChange = (matches) => {
        // matches will be true or false based on the value for the media query
      }

  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    const login = async () => {
        if (!isAuthenticated) {

          await authenticate({
                  provider: "walletconnect", chainId: 56,
                  mobileLinks: [
                    "rainbow",
                    "metamask",
                    "argent",
                    "trust",
                    "imtoken",
                    "pillar",
                  ]
              })
            .then(function (user) {
              console.log(!user.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (

    <Layout style={{ height: "100vh", overflow: "auto", overflowX:"hidden"}}>
      <Router>

        <Header style={styles.header}>
          <MediaQuery minWidth={1224} onChange={handleMediaQueryChange}><Logo/></MediaQuery>
          <MediaQuery maxWidth={1224} onChange={handleMediaQueryChange}> <Log/></MediaQuery>

           <MediaQuery minWidth={1224} onChange={handleMediaQueryChange}> <SearchCollections setInputValue={setInputValue} /></MediaQuery>
           <MediaQuery maxWidth={1224} onChange={handleMediaQueryChange}><SearchCollection setInputValue={setInputValue}/></MediaQuery>


          <MediaQuery maxWidth={1224} onChange={handleMediaQueryChange}><Menu
              theme="light"
              mode="horizontal"
              style={{
                display: "flex",
                fontSize: "9.5px",
                fontWeight: "400",
                marginLeft: "13px",
                width: "100%",
              }}
              defaultSelectedKeys={["nftMarket"]}
            >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/Homepage"> <a href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Home</a></NavLink>
            </Menu.Item>
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>

          <Menu.Item key="xhain">
            <Chains />
          </Menu.Item>
          <Menu.Item key="yative">
            <NativeBalance />
          </Menu.Item>
          <Menu.Item key="zccount">
            <Account />
          </Menu.Item>

            </Menu>
            </MediaQuery>


<MediaQuery minWidth={1224} onChange={handleMediaQueryChange}>
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              marginLeft: "0px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
          <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
            <NavLink to="/Homepage"> <a href="https://www.flaticon.com/free-icons/homepage" title="homepage icons">Home</a></NavLink>
          </Menu.Item>
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>

          <div style={styles.headerRight}>
           <Menu.Item key="chains">
            <Chains />
          </Menu.Item>
          <Menu.Item key="native">
            <NativeBalance />
          </Menu.Item>
          <Menu.Item key="account">
            <Account />
          </Menu.Item>
          </div>
         </Menu>
</MediaQuery>
        </Header>
          <Switch>
        <Route path="/NFTMarketPlace">
        <div style={{ textAlign: "center", fontWeight: "Bold", marginTop: "15px", fontSize:"18px"}}>  <MediaQuery minWidth={1224} onChange={handleMediaQueryChange}> <Latest/></MediaQuery></div>
        <div style={{ marginLeft:"40px", textAlign: "center", fontWeight: "Bold", marginTop: "35px", fontSize:"9.5px"}}>  <MediaQuery maxWidth={1224} onChange={handleMediaQueryChange}> <Latest/></MediaQuery></div>
        </Route>
          </Switch>


        <div style={styles.content}>
          <Switch>

            <Route path="/nftBalance">
              <NFTBalance/>
            </Route>
            <Route path="/NFTMarketPlace">
                   <NFTTokenIds  inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
            <Route path="/Homepage">
              <Homepage/>
            </Route>
          </Switch>
          <Redirect to="/Homepage" />
        </div>
      </Router>
<div>


<MediaQuery minWidth={1224} onChange={handleMediaQueryChange}>
      <Footer style={{ textAlign: "center" }}>
     <Text style={{ display: "block", fontSize:"10px" }}>
       Moralis enables you to simultaneously bid your favorite NFT collection <br/> on all marketplaces where your collection is hosted from one bid point <br/>⭐️ Use a web3 browser to view Market Items
       <a
         target="_blank"
         rel="noopener noreferrer"
         href="https://metamask.io/"
      > metamask.io
      </a>

     </Text>
        <Text style={{ display: "block", fontSize:"10px" }}>
            Community-first NFT metaverse ⭐️ built for the community by
        </Text>

        <Text style={{ display: "block", fontSize:"10px" }}>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io/"
          >
           moralis.io
          </a>
          <Text> Decentralized NFT Market place</Text>
        </Text>
        <Text style={{ display: "block", fontSize:"10px" }}>Bids are submitted simultaneously on Opensea, Rarible, LooksRear. when you Bid on Moralis</Text>


      </Footer>
</MediaQuery>
<MediaQuery maxWidth={1224} onChange={handleMediaQueryChange}>
      <Footer style={{ textAlign: "center" }}>
      <Text style={{ display: "block", fontSize:"9px" }}>
        Moralis enables you to simultaneously bid your favorite NFT collection <br/>
       on all marketplaces where your collection is hosted from one bid point
         <br/> ⭐️ Use a web3 browser to view Market Items
      </Text>
        <Text style={{ display: "block", fontSize:"9px" }}>
        Community-first NFT metaverse ⭐️ built for the community by
        </Text>
        <br/>

        <Text style={{ display: "block", fontSize:"9px", textAlign: "center"}}>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io/"
          >
              moralis.io
      </a>
              <Fotlogorari/>


<Text style={{ display: "block", fontSize:"9px",textAlign: "center"}}> Decentralized NFT Market place</Text>
        </Text>
        <Text style={{ display: "block", fontSize:"9px"}}> Bids are submitted simultaneously on Opensea, Rarible, LooksRear.<br/> when you Bid on Moralis</Text>
      </Footer>

  </MediaQuery>
</div>
    </Layout>

  );

};
export const Latest = () =>(
  <div>
  <Text style={{ display: "block", textAlign: "center", fontSize: "22px", }}>
    <Text> Top collections over </Text>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://opensea.io/"
    >
     &nbsp;last 24 hours
    </a>
  </Text>
  </div>
);
export const Logo = () => (
  <div style={{ display: "flex" }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="41" viewBox="0 0 170 41" fill="none"><path d="M48.6137 8.60315C46.3773 3.88399 41.8154 0.616738 36.6734 0.230609C34.154 -0.00351512 31.5542 0.4228 29.2828 1.56721C27.7575 2.32374 26.4 3.37381 25.259 4.6248C22.9056 1.95683 19.5807 0.209642 15.9919 0.0296815C8.44756 -0.424588 1.94451 4.46056 0.359807 12.0416C-0.602896 16.5826 0.447166 21.3245 2.53157 25.3185C4.61247 29.2585 7.64909 32.7616 11.5995 34.8198C14.3566 36.1616 16.9407 32.7581 14.9244 30.3784C14.2814 29.6586 13.6891 28.8933 13.1493 28.0756C12.6478 27.3173 12.197 26.5206 11.7882 25.7047C10.6525 23.3774 9.80513 20.7566 9.63739 18.176C9.53781 16.5354 9.75271 15.1219 10.4341 13.6945C11.0788 12.3631 12.1236 11.2187 13.4952 10.6806C15.6285 9.87161 17.8544 10.3067 19.4758 12.0539C20.5294 13.1389 21.0116 14.6572 21.5497 16.0584C21.5899 16.1598 21.6336 16.2576 21.679 16.3537C22.7501 19.6576 27.6597 19.7415 28.577 15.9833C28.6049 15.8557 28.6329 15.7265 28.6626 15.5954C28.6678 15.5744 28.673 15.5552 28.6783 15.5343C28.6835 15.5133 28.687 15.4923 28.6923 15.4696C28.7709 15.1342 28.8617 14.7987 28.9788 14.4859C29.344 13.4778 29.952 12.5046 30.6823 11.7621C31.7831 10.6421 33.186 9.96596 34.7218 10.1162C35.5814 10.1651 36.5511 10.3993 37.25 10.7784C41.1707 12.9047 40.7619 18.4923 39.0811 22.1736C37.9 24.7524 36.0095 26.9102 33.9129 28.7745C33.394 29.234 32.8017 29.7407 32.2653 30.1687C29.807 32.0784 29.178 35.6934 31.1209 38.2844C33.2053 41.1324 37.3566 41.2704 39.7415 38.737C40.2098 38.274 40.6623 37.7935 41.1078 37.3095C45.6068 32.2846 49.6953 24.8258 50.3312 17.9524C50.5933 14.7393 50.022 11.528 48.612 8.60315H48.6137Z" fill="url(#paint01212)"></path>
  <path d="M79.9514 12.3423C81.7964 12.3423 83.278 12.9311 84.3945 14.1087C85.511 15.2863 86.0683 16.8535 86.0683 18.8121V28.4077H81.2391V19.2192C81.2391 18.4278 81.0399 17.8023 80.6433 17.3445C80.2467 16.8867 79.6718 16.6561 78.9205 16.6561C78.1256 16.6561 77.5088 16.9164 77.0703 17.4371C76.63 17.9578 76.4098 18.6776 76.4098 19.5931V28.4077H71.5806V19.2192C71.5806 18.4278 71.3814 17.8023 70.9848 17.3445C70.5882 16.8867 70.0134 16.6561 69.2621 16.6561C68.4671 16.6561 67.8503 16.9164 67.4118 17.4371C66.9715 17.9578 66.7514 18.6776 66.7514 19.5931V28.4077H61.9221V12.7791H66.7514V14.217C67.6319 12.966 69.0699 12.3423 71.0652 12.3423C72.9329 12.3423 74.3377 13.0307 75.2829 14.4057C76.2701 13.0307 77.8268 12.3423 79.9514 12.3423Z" fill="#597196"></path><path d="M103.002 26.4541C101.349 28.0475 99.3314 28.846 96.9499 28.846C94.5685 28.846 92.5505 28.0493 90.8977 26.4541C89.2448 24.8606 88.4184 22.9073 88.4184 20.594C88.4184 18.2807 89.2448 16.3273 90.8977 14.7339C92.5505 13.1405 94.5685 12.3438 96.9499 12.3438C99.3314 12.3438 101.349 13.1405 103.002 14.7339C104.655 16.3273 105.481 18.2807 105.481 20.594C105.481 22.9073 104.655 24.8606 103.002 26.4541ZM94.3099 23.2497C95.0175 23.9381 95.8981 24.2806 96.9499 24.2806C98.0017 24.2806 98.8806 23.9364 99.5899 23.2497C100.298 22.5613 100.652 21.6772 100.652 20.5922C100.652 19.5072 100.298 18.6232 99.5899 17.9348C98.8823 17.2464 98.0017 16.9039 96.9499 16.9039C95.8981 16.9039 95.0175 17.2481 94.3099 17.9348C93.6023 18.6214 93.2476 19.509 93.2476 20.5922C93.2476 21.6755 93.6023 22.5613 94.3099 23.2497Z" fill="#597196"></path><path d="M112.76 28.4094H107.629V12.6952H112.503V16.4831C113.277 13.5845 115.311 12.3003 117.249 12.3003C117.893 12.3003 118.605 12.3335 119.476 12.7284L118.218 17.6694C117.153 17.2745 116.379 17.2745 115.895 17.2745C113.959 17.2745 112.764 18.3945 112.764 23.0053V28.4111L112.76 28.4094Z" fill="#597196"></path><path d="M132.273 12.7783H137.102V28.4069H132.273V26.5566C131.663 28.1291 129.537 28.8437 127.477 28.8437C125.417 28.8437 123.539 28.047 122.036 26.4518C120.533 24.8584 119.782 22.905 119.782 20.5917C119.782 18.2785 120.533 16.3251 122.036 14.7317C123.539 13.1382 125.352 12.3048 127.477 12.3415C131.139 12.4044 132.362 14.1516 132.273 15.0252V12.7783ZM125.674 23.3733C126.381 24.0617 127.304 24.4041 128.443 24.4041C129.582 24.4041 130.503 24.0599 131.212 23.3733C131.922 22.6866 132.275 21.7589 132.275 20.5917C132.275 19.4246 131.92 18.4969 131.212 17.8102C130.505 17.1236 129.58 16.7794 128.443 16.7794C127.306 16.7794 126.383 17.1236 125.674 17.8102C124.966 18.4986 124.611 19.4246 124.611 20.5917C124.611 21.7589 124.966 22.6866 125.674 23.3733Z" fill="#597196"></path><path d="M140.672 28.4074V5.59082H145.501V28.4074H140.672Z" fill="#597196"></path><path d="M153.59 10.5756C153.021 11.1277 152.339 11.4038 151.546 11.4038C150.753 11.4038 150.07 11.1277 149.502 10.5756C148.932 10.0235 148.649 9.36132 148.649 8.59081C148.649 7.8203 148.934 7.15811 149.502 6.606C150.07 6.05389 150.751 5.77783 151.546 5.77783C152.341 5.77783 153.021 6.05389 153.59 6.606C154.158 7.15811 154.443 7.8203 154.443 8.59081C154.443 9.36132 154.158 10.0235 153.59 10.5756ZM149.132 28.4075V12.7788H153.961V28.4075H149.132Z" fill="#597196"></path><path d="M162.08 17.3424C162.08 17.6552 162.354 17.9102 162.901 18.1077C163.448 18.3051 164.108 18.5043 164.881 18.7017C165.653 18.8992 166.425 19.1543 167.199 19.467C167.971 19.7797 168.632 20.2952 169.179 21.0133C169.726 21.7314 170 22.6329 170 23.7162C170 25.404 169.355 26.6812 168.068 27.5443C166.78 28.4091 165.192 28.8407 163.303 28.8407C159.912 28.8407 157.605 27.6019 156.382 25.1209L160.567 22.8076C160.997 24.0377 161.907 24.6509 163.303 24.6509C164.461 24.6509 165.041 24.3277 165.041 23.6812C165.041 23.3685 164.767 23.1081 164.22 22.9002C163.673 22.6923 163.013 22.4896 162.241 22.2905C161.468 22.093 160.696 21.8327 159.922 21.5095C159.15 21.1862 158.489 20.6813 157.943 19.9929C157.396 19.3045 157.121 18.4606 157.121 17.4612C157.121 15.8363 157.728 14.5749 158.94 13.6786C160.153 12.7822 161.65 12.335 163.431 12.335C164.762 12.335 165.974 12.6215 167.068 13.1946C168.162 13.7677 169.042 14.5958 169.708 15.6791L165.588 17.8351C165.073 16.9178 164.353 16.4601 163.431 16.4601C162.508 16.4601 162.078 16.7519 162.078 17.3354L162.08 17.3424Z" fill="#597196"></path><defs><radialGradient id="paint01212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5075 37.7962) rotate(-125.286) scale(43.6181 66.287)"><stop offset="0.0001" stopColor="#09FFD0"></stop><stop offset="1" stopColor="#009EFF"></stop></radialGradient><clipPath id="clip0_2005_54716"><rect width="170" height="40.5348" fill="white"></rect></clipPath></defs></svg>


  </div>
);

export const Log=()=>(
  <div style={{ display: "flex" }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="41" viewBox="0 0 170 41" fill="none"><path d="M48.6137 8.60315C46.3773 3.88399 41.8154 0.616738 36.6734 0.230609C34.154 -0.00351512 31.5542 0.4228 29.2828 1.56721C27.7575 2.32374 26.4 3.37381 25.259 4.6248C22.9056 1.95683 19.5807 0.209642 15.9919 0.0296815C8.44756 -0.424588 1.94451 4.46056 0.359807 12.0416C-0.602896 16.5826 0.447166 21.3245 2.53157 25.3185C4.61247 29.2585 7.64909 32.7616 11.5995 34.8198C14.3566 36.1616 16.9407 32.7581 14.9244 30.3784C14.2814 29.6586 13.6891 28.8933 13.1493 28.0756C12.6478 27.3173 12.197 26.5206 11.7882 25.7047C10.6525 23.3774 9.80513 20.7566 9.63739 18.176C9.53781 16.5354 9.75271 15.1219 10.4341 13.6945C11.0788 12.3631 12.1236 11.2187 13.4952 10.6806C15.6285 9.87161 17.8544 10.3067 19.4758 12.0539C20.5294 13.1389 21.0116 14.6572 21.5497 16.0584C21.5899 16.1598 21.6336 16.2576 21.679 16.3537C22.7501 19.6576 27.6597 19.7415 28.577 15.9833C28.6049 15.8557 28.6329 15.7265 28.6626 15.5954C28.6678 15.5744 28.673 15.5552 28.6783 15.5343C28.6835 15.5133 28.687 15.4923 28.6923 15.4696C28.7709 15.1342 28.8617 14.7987 28.9788 14.4859C29.344 13.4778 29.952 12.5046 30.6823 11.7621C31.7831 10.6421 33.186 9.96596 34.7218 10.1162C35.5814 10.1651 36.5511 10.3993 37.25 10.7784C41.1707 12.9047 40.7619 18.4923 39.0811 22.1736C37.9 24.7524 36.0095 26.9102 33.9129 28.7745C33.394 29.234 32.8017 29.7407 32.2653 30.1687C29.807 32.0784 29.178 35.6934 31.1209 38.2844C33.2053 41.1324 37.3566 41.2704 39.7415 38.737C40.2098 38.274 40.6623 37.7935 41.1078 37.3095C45.6068 32.2846 49.6953 24.8258 50.3312 17.9524C50.5933 14.7393 50.022 11.528 48.612 8.60315H48.6137Z" fill="url(#paint01212)"></path>
  <path d="M79.9514 12.3423C81.7964 12.3423 83.278 12.9311 84.3945 14.1087C85.511 15.2863 86.0683 16.8535 86.0683 18.8121V28.4077H81.2391V19.2192C81.2391 18.4278 81.0399 17.8023 80.6433 17.3445C80.2467 16.8867 79.6718 16.6561 78.9205 16.6561C78.1256 16.6561 77.5088 16.9164 77.0703 17.4371C76.63 17.9578 76.4098 18.6776 76.4098 19.5931V28.4077H71.5806V19.2192C71.5806 18.4278 71.3814 17.8023 70.9848 17.3445C70.5882 16.8867 70.0134 16.6561 69.2621 16.6561C68.4671 16.6561 67.8503 16.9164 67.4118 17.4371C66.9715 17.9578 66.7514 18.6776 66.7514 19.5931V28.4077H61.9221V12.7791H66.7514V14.217C67.6319 12.966 69.0699 12.3423 71.0652 12.3423C72.9329 12.3423 74.3377 13.0307 75.2829 14.4057C76.2701 13.0307 77.8268 12.3423 79.9514 12.3423Z" fill="#597196"></path><path d="M103.002 26.4541C101.349 28.0475 99.3314 28.846 96.9499 28.846C94.5685 28.846 92.5505 28.0493 90.8977 26.4541C89.2448 24.8606 88.4184 22.9073 88.4184 20.594C88.4184 18.2807 89.2448 16.3273 90.8977 14.7339C92.5505 13.1405 94.5685 12.3438 96.9499 12.3438C99.3314 12.3438 101.349 13.1405 103.002 14.7339C104.655 16.3273 105.481 18.2807 105.481 20.594C105.481 22.9073 104.655 24.8606 103.002 26.4541ZM94.3099 23.2497C95.0175 23.9381 95.8981 24.2806 96.9499 24.2806C98.0017 24.2806 98.8806 23.9364 99.5899 23.2497C100.298 22.5613 100.652 21.6772 100.652 20.5922C100.652 19.5072 100.298 18.6232 99.5899 17.9348C98.8823 17.2464 98.0017 16.9039 96.9499 16.9039C95.8981 16.9039 95.0175 17.2481 94.3099 17.9348C93.6023 18.6214 93.2476 19.509 93.2476 20.5922C93.2476 21.6755 93.6023 22.5613 94.3099 23.2497Z" fill="#597196"></path><path d="M112.76 28.4094H107.629V12.6952H112.503V16.4831C113.277 13.5845 115.311 12.3003 117.249 12.3003C117.893 12.3003 118.605 12.3335 119.476 12.7284L118.218 17.6694C117.153 17.2745 116.379 17.2745 115.895 17.2745C113.959 17.2745 112.764 18.3945 112.764 23.0053V28.4111L112.76 28.4094Z" fill="#597196"></path><path d="M132.273 12.7783H137.102V28.4069H132.273V26.5566C131.663 28.1291 129.537 28.8437 127.477 28.8437C125.417 28.8437 123.539 28.047 122.036 26.4518C120.533 24.8584 119.782 22.905 119.782 20.5917C119.782 18.2785 120.533 16.3251 122.036 14.7317C123.539 13.1382 125.352 12.3048 127.477 12.3415C131.139 12.4044 132.362 14.1516 132.273 15.0252V12.7783ZM125.674 23.3733C126.381 24.0617 127.304 24.4041 128.443 24.4041C129.582 24.4041 130.503 24.0599 131.212 23.3733C131.922 22.6866 132.275 21.7589 132.275 20.5917C132.275 19.4246 131.92 18.4969 131.212 17.8102C130.505 17.1236 129.58 16.7794 128.443 16.7794C127.306 16.7794 126.383 17.1236 125.674 17.8102C124.966 18.4986 124.611 19.4246 124.611 20.5917C124.611 21.7589 124.966 22.6866 125.674 23.3733Z" fill="#597196"></path><path d="M140.672 28.4074V5.59082H145.501V28.4074H140.672Z" fill="#597196"></path><path d="M153.59 10.5756C153.021 11.1277 152.339 11.4038 151.546 11.4038C150.753 11.4038 150.07 11.1277 149.502 10.5756C148.932 10.0235 148.649 9.36132 148.649 8.59081C148.649 7.8203 148.934 7.15811 149.502 6.606C150.07 6.05389 150.751 5.77783 151.546 5.77783C152.341 5.77783 153.021 6.05389 153.59 6.606C154.158 7.15811 154.443 7.8203 154.443 8.59081C154.443 9.36132 154.158 10.0235 153.59 10.5756ZM149.132 28.4075V12.7788H153.961V28.4075H149.132Z" fill="#597196"></path><path d="M162.08 17.3424C162.08 17.6552 162.354 17.9102 162.901 18.1077C163.448 18.3051 164.108 18.5043 164.881 18.7017C165.653 18.8992 166.425 19.1543 167.199 19.467C167.971 19.7797 168.632 20.2952 169.179 21.0133C169.726 21.7314 170 22.6329 170 23.7162C170 25.404 169.355 26.6812 168.068 27.5443C166.78 28.4091 165.192 28.8407 163.303 28.8407C159.912 28.8407 157.605 27.6019 156.382 25.1209L160.567 22.8076C160.997 24.0377 161.907 24.6509 163.303 24.6509C164.461 24.6509 165.041 24.3277 165.041 23.6812C165.041 23.3685 164.767 23.1081 164.22 22.9002C163.673 22.6923 163.013 22.4896 162.241 22.2905C161.468 22.093 160.696 21.8327 159.922 21.5095C159.15 21.1862 158.489 20.6813 157.943 19.9929C157.396 19.3045 157.121 18.4606 157.121 17.4612C157.121 15.8363 157.728 14.5749 158.94 13.6786C160.153 12.7822 161.65 12.335 163.431 12.335C164.762 12.335 165.974 12.6215 167.068 13.1946C168.162 13.7677 169.042 14.5958 169.708 15.6791L165.588 17.8351C165.073 16.9178 164.353 16.4601 163.431 16.4601C162.508 16.4601 162.078 16.7519 162.078 17.3354L162.08 17.3424Z" fill="#597196"></path><defs><radialGradient id="paint01212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.5075 37.7962) rotate(-125.286) scale(43.6181 66.287)"><stop offset="0.0001" stopColor="#09FFD0"></stop><stop offset="1" stopColor="#009EFF"></stop></radialGradient><clipPath id="clip0_2005_54716"><rect width="170" height="40.5348" fill="white"></rect></clipPath></defs></svg>


  </div>
);





export const Fotlogorari = () => (
   <div style={{ display: "inline" }}>
<div className="sc-bdvvtL sc-gsDKAQ sc-dkPtRN sc-jRQBWg dPQJwp fEuCYr dJQyXW"><div className="sc-bdvvtL sc-gsDKAQ sc-dkPtRN sc-fotOHu qfAKJ fEuCYr hokLtX"><div className="sc-bdvvtL sc-gsDKAQ sc-dkPtRN gRTeDQ fEuCYr"><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.7927 3.74115C18.7927 5.56401 17.7277 6.47067 16.5308 6.78561C17.9633 7.21508 19 8.38897 19 10.25V13.6667H13.5337V10.4218C13.5337 9.42924 12.9494 9.0284 11.9504 9.0284H5.46627V13.6667H0V0H12.9871C16.248 0 18.7927 0.706239 18.7927 3.74115ZM5.46871 3.81832H12.8585V3.81891C12.8695 3.81852 12.8806 3.81832 12.8917 3.81832C13.3998 3.81832 13.8118 4.23545 13.8118 4.75C13.8118 5.26455 13.3998 5.68168 12.8917 5.68168C12.8806 5.68168 12.8695 5.68148 12.8585 5.68109V5.68168H5.46871V3.81832Z" fill="black"></path></svg></div></div>
<svg width="54" height="10" viewBox="0 0 84 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="rgba(4, 4, 5, 1)"><path fillRule="evenodd" clipRule="evenodd" d="M62.8394 13.0771C62.8394 17.0643 60.5283 19.8088 56.6072 19.8088C54.9972 19.8088 53.5171 19.1356 52.8679 18.0999V19.6016H49.5961V1.27072H52.8679V8.00241C53.621 7.01855 55.0232 6.34538 56.6591 6.34538C60.5283 6.34538 62.8394 9.08984 62.8394 13.0771ZM52.6602 13.0771C52.6602 15.4332 54.0365 16.9866 56.1398 16.9866C58.2172 16.9866 59.5935 15.4332 59.5935 13.0771C59.5935 10.721 58.2172 9.16751 56.1398 9.16751C54.0365 9.16751 52.6602 10.721 52.6602 13.0771Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.1866 19.6016L12.19 11.4977C13.9817 10.6174 15.0464 8.88271 15.0464 6.83731C15.0464 3.57503 12.7353 1.47785 9.17781 1.47785H0.5L0.525967 19.6016H4.05751V12.1709H8.58057L12.0838 19.6016H16.1866ZM4.05751 4.50711H8.6325C10.4502 4.50711 11.4889 5.38741 11.4889 6.83731C11.4889 8.28721 10.4502 9.14162 8.6325 9.14162H4.05751V4.50711Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M26.9328 6.55251H30.2047V19.6016H26.9328V18.0999C26.2836 19.1356 24.8294 19.8088 23.1935 19.8088C19.2725 19.8088 16.9614 17.0643 16.9614 13.0771C16.9614 9.08984 19.2725 6.34538 23.1416 6.34538C24.7775 6.34538 26.1797 7.01855 26.9328 8.00241V6.55251ZM20.2073 13.0771C20.2073 15.4332 21.5835 16.9866 23.6609 16.9866C25.7643 16.9866 27.1405 15.4332 27.1405 13.0771C27.1405 10.721 25.7643 9.16751 23.6609 9.16751C21.5835 9.16751 20.2073 10.721 20.2073 13.0771Z"></path><path d="M41.7722 6.55251L41.5645 9.71122C41.0971 9.50409 40.4739 9.40053 39.9026 9.40053C38.0589 9.40053 36.397 10.9281 36.397 14.8118V19.6016H33.1252V6.55251H36.397V8.93449C37.0462 7.4587 38.76 6.34538 40.344 6.34538C40.8114 6.34538 41.3827 6.42305 41.7722 6.55251Z"></path><path d="M46.6865 19.6016H43.4147V6.55251H46.6865V19.6016Z"></path><path d="M65.0587 19.6016H68.3306V1.27072H65.0587V19.6016Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M83.5746 12.6369C83.5746 9.60766 81.4193 6.34538 77.0049 6.34538C72.6684 6.34538 70.539 9.68533 70.539 13.0771C70.539 16.4688 72.8501 19.8088 77.1866 19.8088C80.2508 19.8088 82.5359 18.3589 83.263 15.8992L80.1988 15.0707C79.8613 16.3393 78.7706 17.0643 77.2386 17.0643C75.3689 17.0643 74.0965 15.8992 73.8109 13.9315H83.5226C83.5486 13.6726 83.5746 13.103 83.5746 12.6369ZM73.8888 11.5495C74.2523 9.78889 75.3949 8.83093 77.0049 8.83093C78.9005 8.83093 79.9132 9.99602 80.069 11.5495H73.8888Z"></path><path d="M43.0271 1.94336C43.0271 1.11493 43.6987 0.443359 44.5271 0.443359H45.6004C46.4288 0.443359 47.1004 1.11493 47.1004 1.94336V3.0166C47.1004 3.84503 46.4288 4.5166 45.6004 4.5166H44.5271C43.6987 4.5166 43.0271 3.84503 43.0271 3.0166V1.94336Z"></path></g></svg></div>
  </div>
);


export const Homepage = () => (
  <div
  data-elementor-type="wp-page"
  data-elementor-id="82975"
  className="elementor elementor-82975"
  >
  <div className="elementor-inner">
  <div className="elementor-section-wrap">
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a5a879b elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="a5a879b"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b5133b8"
            data-id="b5133b8"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-fac9bee elementor-widget elementor-widget-heading"
                  data-id="fac9bee"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">
                      Empowering<br/>{" "} <span className="web3">NFT Trading</span>{" "} <span className="web3">&</span>{" "}<br/><span className="web3">Web3</span>{" "}<br/>
                      <span className="development">Development</span>
                    </h1>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-b0135ab textBox elementor-widget elementor-widget-text-editor"
                  data-id="b0135ab"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                     Moralis marketplace provides a <span>seamless method of purchasing digital assets</span>. It is now possible to submit your bid simultaneously across all marketplaces at zero cost. This is the first marketplace empowering NFT trading and web3 development with fully integrated tools and services on the Blockchain.  Placing a bid on your favorite collections has never been as bliss as now.
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-53a36e3 elementor-align-left elementor-mobile-align-center elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-widget elementor-widget-button"
                  data-id="53a36e3"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      {" "}
                      <a
                        href="/NFTMarketPlace"
                        target="_blank"
                        className="elementor-button-link elementor-button elementor-size-md"
                        role="button"
                      >
                        {" "}
                        <span className="elementor-button-content-wrapper">
                          {" "}
                          <span className="elementor-button-text">
                            View Trending NFT collections
                          </span>{" "}

                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e5f4c2e elementor-align-left elementor-mobile-align-center elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-widget elementor-widget-button"
                  data-id="e5f4c2e"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      {" "}
                      <a
                        href="https://meetings-eu1.hubspot.com/srivastava/talk-to-an-expert"
                        target="_blank"
                        rel="nofollow"
                        className="elementor-button-link elementor-button elementor-size-md"
                        role="button"
                      >
                        {" "}
                        <span className="elementor-button-content-wrapper">
                          {" "}
                          <span className="elementor-button-icon elementor-align-icon-right">
                            {" "}
                            <i
                              aria-hidden="true"
                              className="far fa-arrow-alt-circle-right"
                            ></i>{" "}
                          </span>{" "}
                          <span className="elementor-button-text">
                            Questions? Talk to an expert
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cdf9992"
            data-id="cdf9992"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-0865998 elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="0865998"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_direction":"in-out","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":70,"end":100}},"motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{opacity: "1px", willChange: "opacity"}}
                  >
                    <div className="elementor-image">

                      <img
                        src="https://moralis.io/wp-content/uploads/homePage4/smartContract2.svg"
                        title=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-05be270 elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="05be270"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_direction":"in-out","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":70,"end":100}},"motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{eTransformTransitionuration:"100ms", opacity: "1px", willChange: "opacity"}}
                  >
                    <div className="elementor-image">

                      <img
                        src="https://moralis.io/wp-content/uploads/homePage4/backend2.svg"
                        title=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1306401 elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="1306401"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_direction":"in-out","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":70,"end":100}},"motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  eTransformTransitionDuration: "100ms",
  opacity: "1px",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">

                      <img
                        src="https://moralis.io/wp-content/uploads/homePage4/frontend.svg"
                        title=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-eac9083 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="eac9083"
      data-element_type="section"
      data-settings='{"background_background":"classNameic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8c4e07d"
            data-id="8c4e07d"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-35c42c3 elementor-widget elementor-widget-heading"
                  data-id="35c42c3"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">
                      TRUSTED BY THE COMMUNITY
                    </div>
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-c848f84 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="c848f84"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-928653f"
                        data-id="928653f"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-a39b447 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial partnerImageS elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="a39b447"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="187"
                                      height="43"
                                      viewBox="0 0 187 43"
                                      fill="none"
                                    >
                                      <path
                                        d="M16.375 15.5448C19.5613 16.6196 21.7373 17.7711 23.6801 19.153C26.2447 16.159 26.4778 12.3205 26.167 9.63354C23.991 12.2437 20.6493 14.2397 16.375 15.5448Z"
                                        fill="#B0B5BF"
                                      ></path>
                                      <path
                                        d="M0.753408 42.875C3.00712 39.8042 5.96026 39.1132 11.0894 37.8849C13.11 37.4243 15.3637 36.8869 18.0837 36.0425C24.4562 34.2 26.0882 30.6686 26.4768 28.6726C27.0208 26.1392 26.0882 23.3755 24.0677 21.7633C19.7934 18.2319 15.5191 16.8501 9.22426 15.545L7.90312 15.2379L9.30197 15.0844C16.9957 14.1632 22.358 11.7065 25.2334 7.79129C27.4094 4.87404 27.5648 1.88003 27.4871 0.574951C25.7774 3.18511 22.4357 3.95281 17.0734 5.25789C14.8974 5.79528 12.3328 6.33266 9.4574 7.17713C3.08483 9.0196 1.45284 12.551 1.06426 14.547C0.520265 17.0804 1.45284 19.8441 3.47341 21.4563C7.74769 24.9877 12.022 26.3695 18.3168 27.6746L19.638 27.9817L18.2391 28.1352C14.3534 28.5958 10.5454 29.4403 7.66997 30.4383C4.01741 31.7434 1.68598 33.2788 0.753408 35.0445C-0.49002 37.5779 0.442551 41.4931 0.753408 42.875Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M43.5 26.7526L44.9766 23.6819C46.4531 24.7566 48.2406 25.6779 51.0383 25.6779C52.5926 25.6779 54.4577 24.987 54.4577 23.5283C54.4577 22.1465 52.8257 21.7626 51.1937 21.3788C47.7743 20.6111 44.1994 19.4595 44.1994 15.6211C44.1994 12.0897 47.5411 10.324 51.0383 10.324C53.836 10.324 55.9343 11.0917 57.7994 12.2432L56.3228 15.314C54.8463 14.3928 52.9034 13.8554 51.0383 13.8554C50.1057 13.8554 48.2406 14.2392 48.2406 15.6211C48.2406 16.7726 49.5617 17.2332 51.4269 17.6171C54.6908 18.3848 58.6543 19.6131 58.6543 23.5283C58.6543 27.4436 54.7686 29.2093 51.116 29.2093C46.6086 29.2093 44.5103 27.5971 43.5 26.7526Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M61.0625 23.2985V14.8539H64.8705V22.7611C64.8705 24.7571 65.7254 25.6016 67.5128 25.6016C69.5333 25.6016 70.4659 23.9127 70.4659 21.9934V14.7771H74.2739V28.8259H70.6991V26.8299C69.8442 28.2118 67.9014 29.0562 66.2694 29.0562C62.3059 29.2098 61.0625 26.9067 61.0625 23.2985Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M77.2266 14.8537H80.8791V16.5426C82.0448 15.1608 83.7546 14.5466 85.4643 14.5466C89.4277 14.5466 91.9146 17.771 91.9146 21.8397C91.9146 25.9085 89.35 29.2096 85.3866 29.2096C83.7546 29.2096 82.1226 28.5955 81.1123 27.2904V32.9713H77.3043L77.2266 14.8537ZM87.8734 21.9165C87.8734 19.6902 86.3968 18.078 84.3763 18.078C82.4334 18.078 80.9568 19.6902 80.9568 21.9165C80.9568 24.1428 82.3557 25.755 84.3763 25.755C86.4746 25.755 87.8734 24.1428 87.8734 21.9165Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M93.8594 21.9159C93.8594 17.8471 97.0457 14.6228 101.242 14.6228C105.128 14.6228 108.159 17.8471 108.159 21.8391C108.159 22.5301 108.081 23.221 108.081 23.221H97.7451C98.2114 25.1402 99.8434 26.0615 101.709 26.0615C103.107 26.0615 104.506 25.6776 105.517 24.9867L106.915 27.6736C105.283 28.7484 103.496 29.209 101.631 29.209C97.5119 29.209 93.8594 26.5221 93.8594 21.9159ZM104.584 20.6876C104.273 18.9219 102.874 17.7704 101.165 17.7704C99.5325 17.7704 98.0559 18.9219 97.7451 20.6876H104.584Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M110.641 14.8537H114.371V17.5406C114.759 16.3891 116.236 14.5466 119.345 14.5466V18.6154C116.081 18.6154 114.449 20.074 114.449 23.4519V28.8258H110.641V14.8537Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M121.836 10.7078H135.669V14.0856H125.877V17.7706H134.192V21.1484H125.799V28.9021H121.836V10.7078Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M136.445 21.9159C136.445 17.8471 138.932 14.6228 142.896 14.6228C144.528 14.6228 146.315 15.237 147.325 16.6188V14.9299H151.056V28.9787H147.325V27.2898C146.315 28.6716 144.528 29.2858 142.896 29.2858C138.932 29.209 136.445 25.9847 136.445 21.9159ZM147.248 21.9159C147.248 19.6896 145.849 18.0774 143.828 18.0774C141.808 18.0774 140.331 19.6896 140.331 21.9159C140.331 24.1422 141.808 25.7544 143.828 25.7544C145.849 25.7544 147.248 24.1422 147.248 21.9159Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M154.008 14.8537H157.738V17.5406C158.127 16.3891 159.603 14.5466 162.712 14.5466V18.6154C159.448 18.6154 157.816 20.074 157.816 23.4519V28.8258H154.008V14.8537Z"
                                        fill="#68738D"
                                      ></path>
                                      <path
                                        d="M164.812 14.8531H168.543V16.7724C169.398 15.544 171.03 14.6228 172.739 14.6228C174.993 14.6228 176.392 15.544 177.091 17.1562C178.102 15.4673 180.045 14.6228 181.677 14.6228C185.718 14.6228 186.961 17.3865 186.961 20.9179V28.9019H183.153V21.3785C183.153 19.5361 182.687 18.1542 180.666 18.1542C178.801 18.1542 177.791 19.6128 177.791 21.5321V28.9787H173.983V21.3785C173.983 19.5361 173.594 18.1542 171.496 18.1542C169.553 18.1542 168.621 19.7664 168.621 21.6088V28.9019H164.812V14.8531Z"
                                        fill="#68738D"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-7d7de43 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial partnerImageS elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="7d7de43"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="161"
                                      height="63"
                                      viewBox="0 0 161 63"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0_1587_538)">
                                        <path
                                          d="M70.6685 17.918H76.6643V41.418H82.6601V12.043H76.6643C73.3666 12.043 70.6685 14.6867 70.6685 17.918Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M88.6606 41.418H94.6564V29.668C94.6564 26.4367 91.9583 23.793 88.6606 23.793V41.418Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M100.653 23.793V41.418H106.649V29.668H112.644V35.543C112.644 38.7742 115.343 41.418 118.64 41.418V29.668C118.64 26.4367 115.942 23.793 112.644 23.793H100.653Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M154.616 23.793H148.62V17.918C148.62 14.6867 145.922 12.043 142.625 12.043V35.543H130.633V29.668H136.629V23.793H130.633C127.335 23.793 124.637 26.4367 124.637 29.668V35.543C124.637 38.7742 127.335 41.418 130.633 41.418H148.62V29.668H154.616V35.543C154.616 38.7742 157.314 41.418 160.612 41.418V29.668C160.612 26.4367 157.914 23.793 154.616 23.793Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M88.6606 17.918H94.6564C94.6564 14.6867 91.9583 12.043 88.6606 12.043V17.918Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M80.0206 47.293V51.1377H79.4712L77.3132 48.4738V51.1377H76.6685V47.293H77.2178L79.3759 49.9679V47.293H80.0206ZM92.2169 51.1377H89.8907V47.293H92.161V47.9247H90.5802V48.8802H91.9928V49.512H90.5802V50.5062H92.2169V51.1377ZM102.087 47.9247H103.36V51.1377H104.049V47.9247H105.321V47.293H102.087V47.9247ZM119.996 47.293H120.657L119.536 51.1377H118.891L117.944 48.3585L117.013 51.1377H116.363L115.192 47.293H115.965L116.756 50.0338L117.63 47.293H118.314L119.211 50.0392L119.996 47.293ZM131.099 47.8642C130.718 48.245 130.527 48.7156 130.527 49.2758C130.527 49.8653 130.72 50.3431 131.105 50.7093C131.489 51.0754 131.977 51.2586 132.568 51.2586C133.154 51.2586 133.642 51.0719 134.031 50.6984C134.419 50.3249 134.614 49.8507 134.614 49.2758C134.614 48.6899 134.419 48.2121 134.031 47.8423C133.646 47.4761 133.158 47.293 132.568 47.293C131.977 47.293 131.488 47.4833 131.099 47.8642ZM131.631 50.2425C131.381 49.9862 131.256 49.664 131.256 49.2758C131.256 48.8802 131.379 48.5562 131.626 48.3036C131.876 48.051 132.19 47.9247 132.568 47.9247C132.937 47.9247 133.25 48.051 133.504 48.3036C133.758 48.5599 133.885 48.8839 133.885 49.2758C133.885 49.664 133.765 49.9862 133.526 50.2425C133.291 50.4988 132.971 50.6269 132.568 50.6269C132.194 50.6269 131.882 50.4988 131.631 50.2425ZM145.173 49.7097V51.1487H144.484V47.304C144.678 47.304 144.889 47.3021 145.117 47.2984C145.345 47.2947 145.532 47.293 145.678 47.293C146.627 47.293 147.101 47.6885 147.101 48.4794C147.101 48.7723 147.025 49.0139 146.872 49.2044C146.718 49.3874 146.543 49.512 146.345 49.5779L147.572 51.1487H146.737L145.655 49.7097H145.173ZM145.644 47.9247C145.625 47.9247 145.595 47.9264 145.554 47.9301C145.513 47.9301 145.455 47.9319 145.381 47.9355H145.173V49.0781H145.622C145.842 49.0781 146.021 49.0249 146.16 48.9187C146.302 48.8125 146.373 48.6679 146.373 48.4849C146.373 48.1114 146.13 47.9247 145.644 47.9247ZM157.442 51.1377H158.132V49.1549L159.736 51.1377H160.61L158.895 49.0835L160.509 47.293H159.679L158.132 49.1166V47.293H157.442V51.1377Z"
                                          fill="#B0B5BF"
                                        ></path>
                                        <path
                                          d="M15.8772 34.5366L17.4511 22.9221L3.77783 13.6208L16.2707 17.7654L19.2216 13.3316L29.9931 6.77734L53.749 19.5968L54.9786 39.1632L44.404 53.5731L36.0427 54.8261L40.3709 47.067V39.5971L37.2231 33.7655L34.0262 31.6933L29.1077 36.6572V41.9103L25.2714 45.4284L20.4021 46.0067L18.238 47.2115L14.6967 46.103L13.2212 40.8982L15.8772 37.2355V34.5366Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M37.7177 13.5247C35.111 12.9945 32.2584 13.1391 32.2584 13.1391C32.2584 13.1391 31.3238 17.3802 25.52 18.4886C25.5693 18.4886 33.1928 21.0428 37.7177 13.5247Z"
                                          fill="#B0B5BF"
                                        ></path>
                                        <path
                                          d="M40.0824 51.9822C43.2302 49.5725 45.591 46.2471 46.6731 42.488C46.7223 42.3435 47.1649 42.1025 47.4601 41.9098C47.9519 41.6206 48.4437 41.3795 48.5422 40.994C48.7388 39.8855 48.8372 38.7289 48.8372 37.5723C48.8372 37.1385 48.3945 36.7048 47.9519 36.2711C47.6076 35.9819 47.2633 35.6445 47.2633 35.4036C46.7714 31.018 44.7057 26.9216 41.4105 23.9336L41.0661 24.271C44.2631 27.2108 46.3288 31.2108 46.7714 35.4518C46.8206 35.8374 47.2141 36.2229 47.6076 36.6085C47.9519 36.8977 48.3453 37.3314 48.3453 37.5241C48.3453 38.6325 48.247 39.741 48.0502 40.8495C48.001 41.0422 47.5584 41.235 47.2141 41.4277C46.7223 41.6687 46.2796 41.9098 46.1813 42.2953C45.0009 46.3917 42.2957 49.9581 38.7053 52.2714C39.3446 50.9219 41.3611 46.5363 42.4432 44.3194L42.2466 37.1867L36.0001 31.259L32.4589 31.7409L28.5733 37.9096C28.5733 37.9096 30.3932 40.1747 27.8355 42.8254C25.3272 45.4279 23.3598 46.0061 23.3598 46.0061L21.5399 45.0423C22.0809 44.3676 23.163 43.3555 23.9991 42.6809C25.4255 41.5242 26.8519 41.4277 26.8519 40.1747C26.9011 37.5723 24.0483 38.2952 24.0483 38.2952L23.0155 39.2591L22.5729 42.8254L20.4087 45.476L20.1628 45.4279L16.6216 44.6568C16.6216 44.6568 18.7856 43.5483 19.1299 42.2953C19.4742 41.0905 18.4413 37.0904 18.3921 36.8495C18.4413 36.8977 19.4251 37.7169 19.8677 39.0663C20.6547 36.9458 21.6874 34.9217 21.9826 34.7289C22.2777 34.5362 26.2616 32.4638 26.2616 32.4638L24.9337 35.8855L25.9173 35.3555L28.2782 29.6686C28.2782 29.6686 30.5898 28.5602 32.3112 28.5602C35.4099 28.512 39.9841 24.801 37.9184 18.1504C38.5085 18.3914 48.7388 23.4035 50.5095 33.2349C51.8374 40.8013 47.4601 47.8857 40.0824 51.9822Z"
                                          fill="#B0B5BF"
                                        ></path>
                                        <path
                                          d="M28.3705 14.5844C29.5017 13.2832 29.0589 11.3555 29.0589 11.3555L25.7636 16.1266C25.7145 16.1266 26.9441 16.1748 28.3705 14.5844Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M17.3058 40.6572L17.6992 38.7295C17.6992 38.7295 16.0762 41.5247 15.9287 41.9102C15.7812 42.3441 16.027 43.1152 16.6665 43.0668C17.3058 43.0187 18.0927 42.1031 18.0927 41.4283C18.0927 40.5609 17.3058 40.6572 17.3058 40.6572Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M46.5223 10.006C46.5223 10.006 48.9815 10.1024 51.539 10.3916C45.7846 5.95779 40.3251 4.65656 35.8985 4.65656C29.7996 4.65656 25.6682 7.11443 25.4222 7.259L27.3404 4.27102C27.3404 4.27102 19.6676 3.54811 16.9625 11.5C16.274 9.81325 15.6346 7.35539 15.6346 7.35539C15.6346 7.35539 11.6507 10.7771 13.5197 16.4639C8.94552 14.8254 2.40402 12.5603 2.15811 12.5121C1.81381 12.4639 1.71545 12.6085 1.71545 12.6085C1.71545 12.6085 1.61708 12.753 1.91219 12.994C2.45321 13.4277 12.7819 20.8978 15.0444 22.3435C14.5525 24.0785 14.5525 24.8978 15.0444 25.717C15.7329 26.8255 15.7821 27.4037 15.6837 28.2232C15.5854 29.0424 14.7001 36.1268 14.5033 36.9942C14.3066 37.8618 12.2409 40.9462 12.3392 41.8618C12.4376 42.7774 13.7164 46.6811 14.8476 47.115C15.6837 47.404 17.7496 48.0306 19.1267 48.0306C19.6185 48.0306 20.0611 47.9342 20.2579 47.7414C21.094 47.0185 21.34 46.8739 21.9301 46.8739C21.9793 46.8739 22.0285 46.8739 22.0778 46.8739C22.3236 46.8739 22.6188 46.9221 22.9631 46.9221C23.75 46.9221 24.7828 46.7776 25.5206 46.1028C26.6027 45.0425 28.4717 43.5967 29.0618 42.9221C29.7996 42.0064 30.1931 40.7534 29.9964 39.5004C29.8488 38.3437 30.4882 37.3316 31.226 36.3196C32.1605 35.1147 33.8819 32.9461 33.8819 32.9461C37.2756 35.4521 39.3905 39.2593 39.3905 43.5004C39.3905 51.0186 32.7016 57.0908 24.4386 57.0908C23.1597 57.0908 21.9301 56.9463 20.7006 56.6571C24.4878 57.9584 27.6848 58.3922 30.2914 58.3922C35.8492 58.3922 38.8004 56.4163 38.8004 56.4163C38.8004 56.4163 37.7674 57.7174 36.0952 59.2114C36.1444 59.2114 36.1444 59.2114 36.1444 59.2114C45.3419 57.9584 49.8176 50.5366 49.8176 50.5366C49.8176 50.5366 49.4733 52.9463 49.0307 54.5849C61.2775 45.5728 59.2118 34.2954 59.1627 33.9099C59.261 34.0545 60.4906 35.5002 61.13 36.2713C63.0974 16.4157 46.5223 10.006 46.5223 10.006ZM27.6848 41.7173C27.4879 41.9582 26.6518 42.6811 26.0617 43.2112C25.4714 43.7414 24.8321 44.2715 24.3402 44.7534C24.1435 44.9462 23.75 45.0425 23.1597 45.0425C22.9631 45.0425 22.7663 45.0425 22.6188 45.0425C22.5204 45.0425 22.422 45.0425 22.3236 45.0425C22.2253 45.0425 22.1761 45.0425 22.127 45.0425C21.9793 45.0425 21.8318 45.0425 21.6842 45.0425C22.422 44.0788 24.5861 41.8618 25.3239 41.3799C26.2092 40.8015 26.6518 40.2233 26.1109 39.2112C25.5697 38.1991 24.1435 38.4401 24.1435 38.4401C24.1435 38.4401 24.9796 38.1027 25.7174 38.1027C24.7828 37.8618 23.6024 38.1027 23.0614 38.6329C22.4713 39.163 22.5696 41.0426 22.3236 42.2474C22.0778 43.5004 21.2415 44.1269 19.9628 45.2836C19.2742 45.91 18.7824 46.1028 18.3889 46.1028C17.5528 45.9583 16.569 45.7173 15.8805 45.4763C15.3886 44.8498 14.6509 42.7774 14.4542 41.91C14.6017 41.4281 15.1919 40.416 15.4871 39.8377C16.0772 38.7293 16.4215 38.1027 16.5198 37.5245C16.7167 36.7052 17.3561 31.6448 17.6019 29.5243C18.2414 30.3436 19.1267 31.6931 18.93 32.5605C20.3563 30.5846 19.3235 28.6569 18.8315 27.8858C18.3889 27.1147 17.7987 25.5725 18.2906 23.9338C18.7824 22.2953 20.5531 17.7651 20.5531 17.7651C20.5531 17.7651 21.1432 18.7772 21.9793 18.5845C22.8154 18.3916 29.5536 8.46384 29.5536 8.46384C29.5536 8.46384 31.3735 12.3675 29.4553 15.2109C27.4879 18.0543 25.5697 18.5845 25.5697 18.5845C25.5697 18.5845 28.2749 19.0664 30.7834 17.2832C31.8162 19.6446 32.7999 22.1026 32.8491 22.44C32.7014 22.7772 30.7341 27.4037 30.5374 27.6929C30.4391 27.7893 29.7505 27.9821 29.2587 28.0785C28.4225 28.3195 27.9306 28.464 27.7339 28.6087C27.3896 28.8978 25.8157 33.1388 25.0779 35.2112C24.1927 35.4521 23.3074 35.9341 22.6679 36.8979C23.0122 36.6569 24.0943 36.5123 24.8813 36.416C25.5697 36.3678 27.6848 37.4763 28.2257 39.5485C28.2257 39.5967 28.2257 39.5967 28.2257 39.6449C28.3241 40.416 28.0782 41.1389 27.6848 41.7173ZM23.0614 42.2955C23.504 41.669 23.4549 40.6088 23.504 40.2715C23.5532 39.9341 23.6517 39.3075 24.0452 39.2112C24.4386 39.1148 25.3731 39.2593 25.3731 39.9341C25.3731 40.5607 24.6845 40.7052 24.1927 41.1389C23.8483 41.4763 23.1597 42.1992 23.0614 42.2955ZM42.6859 33.0906C43.1777 30.6328 43.2269 28.5122 43.0794 26.7773C44.9976 29.2833 46.178 32.3195 46.5223 35.4521C46.5715 35.8376 46.965 36.2231 47.3585 36.6087C47.7028 36.8979 48.0962 37.2834 48.0962 37.5245C48.0962 38.6329 47.9978 39.7412 47.8011 40.8497C47.7519 40.9944 47.3093 41.2353 46.965 41.4281C46.473 41.669 46.0304 41.91 45.9321 42.2955C44.85 46.0065 42.5383 49.2836 39.4398 51.5968C44.0138 46.9221 46.2272 39.2112 42.6859 33.0906ZM39.5873 52.0306C42.7843 49.6209 45.2434 46.2474 46.3255 42.4401C46.3747 42.2955 46.8173 42.0545 47.1125 41.8618C47.6043 41.6208 48.0962 41.3318 48.1946 40.9462C48.3912 39.8377 48.4897 38.6811 48.4897 37.5245C48.4897 37.0907 48.0471 36.6569 47.6043 36.2231C47.3584 35.9341 46.965 35.5967 46.965 35.3557C46.5715 31.8376 45.1451 28.5122 42.9319 25.7652C41.9481 19.982 38.0134 18.1989 37.9151 18.1506C38.0134 18.2953 40.5711 21.9097 38.8004 26.1508C36.9805 30.4399 32.3081 29.7654 31.9146 29.8135C31.5212 29.8135 29.9964 31.7413 28.0782 35.3075C27.8323 35.2112 26.7993 34.9702 25.6189 35.163C26.5043 32.7532 27.8323 29.3315 28.0782 29.0424C28.1766 28.9459 28.9143 28.7532 29.4062 28.6087C30.3406 28.3677 30.7834 28.2232 30.9309 28.0303C31.0292 27.8858 31.521 26.7773 32.013 25.6207C32.4556 25.6207 33.5869 25.5243 33.6852 25.476C33.7835 25.3797 34.7181 23.0182 34.7181 22.729C34.7181 22.4881 32.7999 17.8134 32.0621 16.0302C32.4064 15.6446 32.7508 15.1627 33.0949 14.6326C43.1777 15.6928 51.0472 24.0785 51.0472 34.2472C51.0472 42.0545 46.3747 48.8498 39.5873 52.0306Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M26.5034 26.0065C27.4378 24.9462 26.946 22.9703 25.2246 22.6329C25.6673 21.6208 26.3066 19.5967 26.3066 19.5967C26.3066 19.5967 21.2899 27.3076 20.8471 27.4521C20.4045 27.5968 19.9618 25.91 19.9618 25.91C19.0274 29.4282 21.5357 29.9101 21.8309 28.8016C23.208 28.4643 25.5688 27.0184 26.5034 26.0065Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M22.2231 27.8868L24.7807 23.5977C24.7807 23.5977 26.2562 24.3206 25.5184 25.4772C24.584 26.8266 22.2231 27.8868 22.2231 27.8868Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M53.851 47.7413C53.1132 48.7052 52.2771 49.7172 51.2935 50.6811C57.6382 38.7292 51.5886 27.7892 51.3426 27.3555C51.7853 27.7892 52.2279 28.2712 52.6214 28.705C57.4907 34.0063 58.0809 41.9581 53.851 47.7413Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M59.7481 32.3681C57.5349 26.5367 54.3871 21.5728 47.4521 17.0909C40.763 12.7535 33.5821 13.0908 33.1887 13.139C33.1395 13.139 33.0903 13.139 33.0903 13.139C33.3362 13.0426 33.5821 12.9944 33.828 12.9462C35.3527 12.4643 37.3201 12.0788 39.2874 11.8378C44.5011 11.1149 49.7638 12.8498 53.3542 16.5607C53.4034 16.6089 53.4033 16.6089 53.4525 16.6571C57.5349 20.8981 59.6498 26.1994 59.7481 32.3681Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M45.8876 8.51255C38.5591 7.16314 33.8374 7.83784 30.4438 9.09087C30.3455 8.70533 30.0012 7.93423 29.706 7.30771C28.6731 8.51255 27.5912 9.95834 26.9026 10.874C25.0335 12.127 24.2466 13.3319 24.2466 13.3319C25.3287 9.71738 28.4765 7.01855 32.3129 6.34385C33.3948 6.15108 34.5752 6.05469 35.8541 6.05469C39.2477 6.10288 42.6415 6.92218 45.8876 8.51255Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M18.7831 17.7654C13.0286 17.5727 14.9468 11.0184 15.0451 10.6328C15.0451 10.681 15.4387 15.7895 18.7831 17.7654Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M24.4381 5.95801C20.0114 8.56044 20.8969 14.7774 20.8969 14.7774C16.667 8.46406 24.0938 6.10258 24.4381 5.95801Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M17.1542 19.5007C17.4494 19.7417 17.7445 20.1755 17.4002 20.8019C17.2034 21.1393 16.9084 21.0911 16.4656 20.8984C15.8755 20.6092 12.3342 18.5851 9.13721 16.5127C12.7768 17.7657 16.4656 19.1152 17.0559 19.4044C17.0559 19.4044 17.1051 19.4525 17.1542 19.5007Z"
                                          fill="white"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_1587_538">
                                          <rect
                                            width="160.387"
                                            height="61.6875"
                                            fill="white"
                                            transform="translate(0.223145 0.880859)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-972ff3a elementor-widget__width-initial elementor-widget-tablet__width-initial partnerImage elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="972ff3a"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="186"
                                      height="58"
                                      viewBox="0 0 186 58"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0)">
                                        <path
                                          d="M64.0649 28.6441C64.0114 27.325 64.2197 26.0083 64.6777 24.77C65.1356 23.5318 65.8343 22.3965 66.7333 21.4296C67.6323 20.4627 68.7139 19.6834 69.9156 19.1367C71.1173 18.59 72.4154 18.2866 73.7349 18.2441H74.1449C79.2449 18.2441 82.2549 21.2441 83.1449 24.7541L79.9749 25.8141C79.6901 24.5062 78.9446 23.3442 77.8743 22.5401C76.8041 21.736 75.4805 21.3435 74.1449 21.4341C70.8449 21.4341 67.5349 23.8441 67.5349 28.7041C67.5349 33.5641 70.7649 35.8841 74.1849 35.8841C75.5271 35.9208 76.8428 35.5062 77.9215 34.7067C79.0002 33.9072 79.7796 32.769 80.1349 31.4741L83.2449 32.4741C82.7081 34.4493 81.514 36.1825 79.8597 37.3878C78.2054 38.5931 76.1896 39.1985 74.1449 39.1041C71.5182 39.1523 68.9798 38.1555 67.0878 36.3329C65.1957 34.5102 64.1049 32.0108 64.0549 29.3841C64.0449 29.1441 64.0549 28.8941 64.0649 28.6441Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M89.4167 38.6446H86.1367V18.1846H89.4167V26.1846C89.8929 25.6198 90.4917 25.1713 91.1676 24.8732C91.8435 24.5751 92.5786 24.4353 93.3167 24.4646C96.7067 24.4646 98.3167 26.8946 98.3167 29.9246V38.6446H95.1567V30.5046C95.2514 29.8107 95.0697 29.1073 94.6507 28.5462C94.2316 27.985 93.6089 27.6109 92.9167 27.5046C92.7206 27.4844 92.5229 27.4844 92.3267 27.5046C91.5682 27.5046 90.8408 27.8059 90.3044 28.3422C89.768 28.8786 89.4667 29.606 89.4667 30.3646C89.4617 30.4478 89.4617 30.5313 89.4667 30.6146L89.4167 38.6446Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M105.676 30.7646L109.196 30.2146C109.996 30.1146 110.196 29.7046 110.196 29.2146C110.196 28.0546 109.416 27.1246 107.596 27.1246C106.908 27.069 106.227 27.2867 105.699 27.7304C105.171 28.174 104.839 28.808 104.776 29.4946V29.6446L101.776 28.9746C102.026 26.5946 104.186 24.4746 107.566 24.4746C111.806 24.4746 113.416 26.8746 113.416 29.6746V36.5046C113.412 37.2447 113.469 37.9838 113.586 38.7146H110.586C110.478 38.1345 110.434 37.5443 110.456 36.9546C110 37.6554 109.369 38.2246 108.625 38.6053C107.881 38.9861 107.05 39.1651 106.216 39.1246C105.076 39.2187 103.945 38.8568 103.071 38.1182C102.197 37.3795 101.652 36.3245 101.556 35.1846C101.556 35.1146 101.556 35.0446 101.556 34.9846C101.506 32.4546 103.316 31.0946 105.676 30.7646ZM110.216 32.9746V32.3446L106.626 32.8846C106.138 32.9001 105.676 33.1033 105.335 33.4518C104.994 33.8002 104.801 34.267 104.796 34.7546C104.8 34.9962 104.851 35.2346 104.948 35.456C105.045 35.6773 105.185 35.8771 105.36 36.0437C105.535 36.2103 105.742 36.3404 105.968 36.4264C106.194 36.5124 106.434 36.5526 106.676 36.5446H106.826C107.235 36.5874 107.649 36.5489 108.043 36.4311C108.437 36.3134 108.805 36.1188 109.123 35.8585C109.442 35.5982 109.706 35.2775 109.901 34.9147C110.095 34.5519 110.216 34.1542 110.256 33.7446C110.27 33.4869 110.253 33.2283 110.206 32.9746H110.216Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M118.997 17.9048C119.279 17.9008 119.558 17.9526 119.82 18.0571C120.082 18.1616 120.321 18.3168 120.522 18.5138C120.724 18.7108 120.885 18.9457 120.995 19.205C121.106 19.4643 121.164 19.7429 121.167 20.0248C121.167 20.4467 121.042 20.8593 120.808 21.2105C120.574 21.5618 120.242 21.836 119.852 21.9988C119.463 22.1617 119.034 22.2057 118.62 22.1256C118.206 22.0454 117.825 21.8446 117.524 21.5483C117.224 21.252 117.017 20.8735 116.932 20.4603C116.846 20.0472 116.884 19.6179 117.041 19.2264C117.199 18.8349 117.468 18.4986 117.816 18.2599C118.164 18.0212 118.575 17.8907 118.997 17.8848V17.9048ZM117.397 38.7048V24.8848H120.677V38.6448L117.397 38.7048Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M128.145 38.6441H124.875V24.8841H128.065V26.7141C128.481 26.0114 129.078 25.4335 129.794 25.0411C130.51 24.6488 131.319 24.4564 132.135 24.4841C135.495 24.4841 137.135 26.9141 137.135 29.9441V38.6441H133.865V30.5041C133.865 28.8141 133.095 27.4441 131.035 27.4441C130.654 27.4467 130.278 27.5243 129.927 27.6724C129.576 27.8206 129.258 28.0364 128.99 28.3076C128.723 28.5787 128.511 28.8999 128.368 29.2527C128.225 29.6056 128.152 29.9832 128.155 30.3641C128.155 30.4741 128.155 30.5841 128.155 30.6941L128.145 38.6441Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M141.096 38.6446V18.1846H144.376V38.6446H141.096Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M150.226 17.9043C150.648 17.9023 151.061 18.0258 151.413 18.2591C151.764 18.4924 152.039 18.825 152.201 19.2146C152.364 19.6042 152.407 20.0333 152.325 20.4474C152.243 20.8615 152.04 21.2419 151.742 21.5404C151.443 21.8389 151.063 22.042 150.649 22.1239C150.234 22.2057 149.805 22.1627 149.416 22.0002C149.026 21.8378 148.694 21.5632 148.46 21.2114C148.227 20.8596 148.104 20.4464 148.105 20.0243C148.111 19.4637 148.336 18.9275 148.732 18.531C149.129 18.1346 149.665 17.9095 150.226 17.9043ZM148.616 38.7043V24.8843H151.866V38.6443L148.616 38.7043Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M159.385 38.6448H156.105V24.8848H159.295V26.7148C159.712 26.0129 160.31 25.4356 161.026 25.0434C161.741 24.6511 162.55 24.4582 163.365 24.4849C166.725 24.4849 168.365 26.9148 168.365 29.9448V38.6448H165.085V30.5049C165.18 29.8109 164.998 29.1076 164.579 28.5464C164.16 27.9853 163.538 27.6112 162.845 27.5049C162.646 27.4848 162.445 27.4848 162.245 27.5049C161.482 27.5128 160.752 27.8218 160.214 28.3648C159.677 28.9078 159.375 29.6409 159.375 30.4049C159.365 30.5213 159.365 30.6384 159.375 30.7549L159.385 38.6448Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M179.557 30.6946L185.327 38.6946H181.327L177.327 33.0246L175.637 34.8046V38.6446H172.387V18.1846H175.637V30.4446L180.917 24.8846H185.267L179.557 30.6946Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M25.2358 12.6445L39.4158 20.7845V37.1445L25.2758 45.3345L11.1058 37.2145V20.8645L25.2358 12.6445ZM25.2358 0.644531L20.0358 3.64453L5.87578 11.8645L0.675781 14.8645V43.2345L5.87578 46.2345L20.0558 54.3745L25.2558 57.3745L30.4558 54.3745L44.5858 46.1745L49.7858 43.1745V14.7645L44.5858 11.7645L30.4158 3.64453L25.2158 0.644531H25.2358Z"
                                          fill="white"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0">
                                          <rect
                                            width="184.65"
                                            height="56.71"
                                            fill="white"
                                            transform="translate(0.675781 0.644531)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-d16b880 elementor-widget__width-initial elementor-widget-tablet__width-initial partnerImage elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="d16b880"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="179"
                                      height="42"
                                      viewBox="0 0 179 42"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0)">
                                        <path
                                          d="M48.38 21.4268C48.38 14.6228 52.0726 11.2484 59.3169 11.2484C62.2766 11.2484 64.0242 11.7739 65.5187 12.4377L64.2502 15.8397C62.3611 15.3419 61.5724 15.1483 59.3732 15.1201C55.7652 15.0653 53.257 17.0562 53.257 21.1497C53.257 25.2436 55.9067 27.4287 59.9375 27.4287C61.882 27.4287 63.0382 27.2627 64.5593 26.8755L65.5745 30.4158C63.6578 31.1072 61.9952 31.3562 59.4301 31.3562C52.1295 31.3562 48.38 27.8435 48.38 21.4268ZM78.994 23.5288C78.994 21.0949 78.3744 19.2417 75.7795 19.2417C73.2431 19.2417 72.539 21.0949 72.539 23.557C72.539 26.1564 73.3282 27.7329 75.8364 27.7329C78.3744 27.7329 78.9934 26.101 78.9934 23.5288H78.994ZM67.8024 23.6671C67.8024 18.6604 70.9881 15.5903 75.8646 15.5903C81.333 15.5903 83.7864 18.6056 83.7864 23.5293C83.7864 28.6733 80.3459 31.412 75.6104 31.412C70.5371 31.412 67.8024 28.3967 67.8024 23.6666V23.6671ZM85.3101 15.978H90.3557L92.949 24.165L93.7382 27.1797L94.6125 24.165L97.4866 15.978H102.421L96.4442 31.0796H90.8625L85.3101 15.978ZM113.216 27.235V24.8569L110.906 24.9128C109.524 24.9399 108.51 25.3824 108.51 26.4888C108.51 27.3739 109.383 27.7611 110.229 27.7611C111.131 27.7611 112.202 27.5116 113.216 27.2356L113.216 27.235ZM103.943 26.7649C103.943 22.948 107.495 22.1735 110.54 22.1735H113.216V21.2326C113.216 19.9055 112.343 19.5183 110.427 19.5183C108.904 19.5183 107.269 19.8502 105.831 20.1816L104.902 16.8349C106.65 16.1716 108.679 15.6185 111.131 15.6185C115.895 15.6185 117.812 16.9461 117.812 20.3481V27.0691C117.812 27.567 118.319 27.6776 119.193 27.7052L119.024 31.1902C118.658 31.2179 118.29 31.2179 117.924 31.2179C116.064 31.2179 114.091 30.9136 113.668 29.6137C112.541 30.4716 110.934 31.3285 109.242 31.3285C105.86 31.3285 103.943 29.7796 103.943 26.7649ZM122.69 10.2245H127.397V31.0801H122.69V10.2245ZM140.449 21.9799C140.505 20.1545 139.688 18.8822 138.166 18.8822C136.559 18.8822 135.517 19.9885 135.431 21.9799H140.449ZM130.61 23.7496C130.61 17.5822 133.909 15.6185 138.56 15.6185C143.409 15.6185 145.269 18.7162 145.269 23.2799V24.9394H135.291C135.263 27.318 137.179 27.7606 139.63 27.7606C140.674 27.7606 142.422 27.4287 144.029 27.1521L144.734 30.6642C143.014 31.1626 140.816 31.412 138.955 31.412C133.882 31.412 130.61 29.7796 130.61 23.7496ZM148.484 15.978H153.192V17.4992C154.122 16.8078 156.152 15.5903 158.21 15.5903C163.03 15.5903 163.368 18.1902 163.368 21.6204V31.0801H158.688V22.0076C158.688 19.9332 158.21 19.5736 156.63 19.5736C155.221 19.5736 153.953 20.0162 153.192 20.3757V31.0796H148.484V15.978ZM167.991 26.3776V19.38H165.737V15.978H167.991V12.8798H172.671V15.978H177.435V19.38H172.671V26.35C172.671 27.4563 173.094 27.5393 174.363 27.5393C175.405 27.5393 177.689 27.235 177.689 27.235L178.14 30.8583C177.04 31.1626 175.547 31.3838 174.419 31.3838C171.459 31.3838 167.991 31.5221 167.991 26.3776ZM21.5422 9.70927V-0.00195312C9.81825 -0.00195312 0.324219 9.31437 0.324219 20.8178C0.324219 32.3217 9.81877 41.6385 21.5422 41.6385V31.9273C15.2846 31.9273 10.2212 26.9585 10.2212 20.8178C10.2212 14.6781 15.2846 9.70927 21.5422 9.70927Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M32.9055 9.70927C32.2557 9.70927 31.6122 9.58368 31.0118 9.33967C30.4114 9.09566 29.866 8.73799 29.4065 8.28711C28.9469 7.83622 28.5824 7.30093 28.3338 6.7118C28.085 6.12273 27.957 5.49129 27.957 4.85365C27.957 4.21601 28.085 3.5846 28.3338 2.9955C28.5824 2.40639 28.9469 1.87111 29.4065 1.42022C29.866 0.969336 30.4114 0.611675 31.0118 0.367658C31.6122 0.123641 32.2557 -0.00195314 32.9055 -0.00195312C34.218 -0.0019531 35.4767 0.509619 36.4047 1.42022C37.3327 2.33083 37.854 3.56587 37.854 4.85365C37.854 6.14142 37.3327 7.37648 36.4047 8.28711C35.4767 9.19769 34.218 9.70927 32.9055 9.70927Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M32.8235 41.637C31.5111 41.637 30.2524 41.1254 29.3244 40.2148C28.3964 39.3042 27.875 38.0692 27.875 36.7814C27.875 35.4936 28.3964 34.2586 29.3244 33.3479C30.2524 32.4374 31.5111 31.9258 32.8235 31.9258C34.136 31.9258 35.3946 32.4374 36.3226 33.3479C37.2506 34.2586 37.772 35.4936 37.772 36.7814C37.772 38.0692 37.2506 39.3042 36.3226 40.2148C35.3946 41.1254 34.136 41.637 32.8235 41.637Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M32.8646 20.818C32.8646 26.9587 27.8012 31.9275 21.543 31.9275V9.70898C27.8006 9.70898 32.8646 14.6773 32.8646 20.8175"
                                          fill="white"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0">
                                          <rect
                                            width="178"
                                            height="42"
                                            fill="white"
                                            transform="translate(0.324219)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-1e1def1 elementor-widget__width-initial elementor-widget-tablet__width-initial partnerImage elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="1e1def1"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="184"
                                      height="44"
                                      viewBox="0 0 184 44"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0)">
                                        <path
                                          d="M19.3883 38.6508C18.5745 40.3054 17.432 41.6226 16.1487 42.4419C14.7558 43.2773 12.9091 43.7431 10.4833 43.7431C7.24364 43.7431 4.81783 42.7953 2.97109 40.8997C1.13999 39.0202 0.326172 36.2893 0.326172 32.8516V15.8877H4.94304V32.1287C4.94304 34.6186 5.5221 36.5142 6.78978 37.8154C7.94791 39.0042 9.6851 39.711 11.9857 39.711C14.6463 39.711 16.6026 38.8756 17.9955 37.3335C19.3883 35.6789 20.077 33.3013 20.077 30.1046V15.8877H24.6938V43.0363H20.077V38.6508H19.3883Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M39.7184 38.8911H47.3402V43.0518H43.7562C40.8609 43.0518 38.6698 42.3449 37.2926 40.9152C35.8997 39.4855 35.2111 37.2365 35.2111 34.2807V20.1763H29.0918V16.0156H35.1015V8.6582H39.7184V16.0156H46.6515V20.1602H39.7184V38.8911Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M57.6223 20.1608C58.5457 17.3174 60.7367 15.8877 64.2111 15.8877H66.4022V20.6267H63.5069C61.1906 20.6267 59.5786 21.221 58.4205 22.2813C57.2623 23.3415 56.6833 25.2532 56.6833 27.7431V43.1648H52.0664V15.8877H56.6833V20.0323H57.6066V20.1608H57.6223Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M89.6266 38.6508C88.8128 40.3054 87.6704 41.6226 86.387 42.4419C84.9941 43.2773 83.1474 43.7431 80.7216 43.7431C77.482 43.7431 75.0561 42.7953 73.2094 40.8997C71.3626 39.0042 70.5488 36.2732 70.5488 32.8355V15.8877H75.1657V32.1287C75.1657 34.6186 75.7448 36.5142 77.0124 37.8154C78.2801 39.1166 80.0173 39.711 82.3336 39.711C84.9941 39.711 86.9504 38.8756 88.3433 37.3335C89.7362 35.6789 90.4248 33.3013 90.4248 30.1046V15.8877H95.0417V43.0363H90.4248V38.6508C90.4405 38.6508 89.6266 38.6508 89.6266 38.6508Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M118.627 16.2413C120.364 16.9482 121.741 18.1369 122.79 19.5666C123.823 20.9964 124.402 22.651 124.402 24.5466H119.55C119.316 21.1088 116.89 19.3257 112.382 19.3257C110.426 19.3257 108.924 19.6791 107.875 20.5144C106.842 21.2213 106.263 22.2976 106.263 23.4863C106.263 24.5466 106.608 25.2695 107.296 25.6229C107.985 26.1048 109.252 26.4582 110.99 26.9241L115.841 27.9843C118.502 28.5787 120.458 29.2855 121.851 30.3618C123.244 31.4221 123.932 33.0927 123.932 35.3417C123.932 36.9964 123.463 38.5385 122.54 39.8558C121.616 41.157 120.223 42.2333 118.502 42.9401C116.765 43.647 114.808 44.0004 112.617 44.0004C108.579 44.0004 105.449 43.0526 103.258 41.157C101.067 39.2614 99.6744 36.8839 99.3301 33.7996H104.182C104.87 37.8317 107.64 39.8397 112.727 39.8397C114.918 39.8397 116.655 39.4863 117.813 38.651C118.971 37.8156 119.55 36.8678 119.55 35.6791C119.55 34.9723 119.316 34.3779 118.971 33.896C118.627 33.5425 118.048 33.1891 117.359 32.9482C116.671 32.7072 115.513 32.4662 113.901 32.1128L109.049 31.0526C106.733 30.5707 104.886 29.7514 103.618 28.5626C102.351 27.3739 101.662 25.7193 101.662 23.5827C101.662 20.9803 102.695 18.9562 104.667 17.414C106.748 15.8719 109.284 15.165 112.523 15.165C114.934 15.1811 116.89 15.5345 118.627 16.2413Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M137.798 38.8911H145.42V43.0518H141.836C138.941 43.0518 136.75 42.3449 135.373 40.9152C133.98 39.4855 133.291 37.2365 133.291 34.2807V20.1763H127.172V16.0156H133.291V8.6582H137.908V16.0156H144.732V20.1602H137.908V38.8911H137.798Z"
                                          fill="white"
                                        ></path>
                                        <path
                                          d="M177.191 6.16868V26.5703H158.129V6.16868H177.191V0H165.516L152.229 10.5542V17.3173C152.229 26.2169 159.271 33.6867 168.051 33.5582C176.487 33.4458 183.295 26.3293 183.295 17.6707V6.16868H177.191Z"
                                          fill="white"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0">
                                          <rect
                                            width="183"
                                            height="44"
                                            fill="white"
                                            transform="translate(0.326172)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-709200d elementor-widget__width-initial elementor-widget-tablet__width-initial partnerImage elementor-widget-mobile__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                              data-id="709200d"
                              data-element_type="widget"
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="247"
                                      height="50"
                                      viewBox="0 0 247 50"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip3456)">
                                        <path
                                          d="M66.8035 16.7212H69.4848L76.9886 33.9233H73.4463L71.8229 29.986H64.2685L62.6872 33.9233H59.2266L66.8035 16.7212ZM70.7425 27.3631L68.0612 20.3667L65.3292 27.3631H70.7425Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M80.3125 16.7212H83.8801L88.6294 29.7193L93.525 16.7212H96.8703L89.8364 33.9233H87.1635L80.3125 16.7212Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M107.953 16.7212H110.635L118.139 33.9233H114.596L112.973 29.986H105.418L103.843 33.9233H100.391L107.953 16.7212ZM111.892 27.3631L109.211 20.3667L106.479 27.3631H111.892Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M124.992 16.7212H128.087V31.153H135.492V33.9316H124.992V16.7212Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M148.311 16.7212H150.993L158.496 33.9233H154.954L153.331 29.986H145.776L144.201 33.9233H140.734L148.311 16.7212ZM152.25 27.3631L149.569 20.3667L146.837 27.3631H152.25Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M165.347 16.7212H169.454L177.895 29.5026H177.943V16.7212H181.038V33.9233H177.099L168.486 20.7307H168.439V33.9233H165.344L165.347 16.7212Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M201.807 20.7554C201.297 20.1675 200.658 19.7019 199.939 19.3939C199.367 19.1698 198.758 19.0539 198.143 19.0521C197.297 19.0416 196.459 19.2073 195.682 19.5384C194.971 19.8404 194.333 20.2884 193.811 20.8526C193.278 21.417 192.861 22.0773 192.581 22.7976C192.298 23.5689 192.157 24.3837 192.165 25.2039C192.155 26.0714 192.296 26.9341 192.581 27.7546C192.856 28.4986 193.274 29.1835 193.811 29.7719C194.336 30.3376 194.973 30.7923 195.682 31.1083C196.459 31.4394 197.297 31.6051 198.143 31.5946C198.853 31.5924 199.551 31.4258 200.183 31.1083C200.918 30.7149 201.556 30.1677 202.054 29.5051L204.612 31.3028C203.883 32.3225 202.889 33.1281 201.734 33.634C200.593 34.1217 199.361 34.3696 198.118 34.362C196.851 34.3764 195.591 34.1627 194.401 33.7313C193.322 33.3167 192.336 32.6974 191.498 31.9085C190.681 31.0954 190.037 30.1289 189.604 29.0661C189.133 27.9002 188.898 26.6538 188.915 25.3984C188.897 24.1185 189.131 22.8473 189.604 21.6557C190.029 20.5747 190.673 19.5912 191.498 18.7659C192.327 17.9659 193.316 17.3452 194.401 16.9432C195.588 16.4954 196.849 16.273 198.118 16.2875C199.242 16.2713 200.358 16.4821 201.396 16.9071C202.488 17.3733 203.453 18.0895 204.21 18.9966L201.807 20.7554Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M211.609 16.7212H214.704V23.5759H222.864V16.724H225.959V33.926H222.864V26.3545H214.704V33.9344H211.609V16.7212Z"
                                          fill="#68738D"
                                        ></path>
                                        <path
                                          d="M234.771 16.7212H246.307V19.4998H237.866V23.726H245.862V26.5045H237.866V31.1697H246.749V33.9483H234.766L234.771 16.7212Z"
                                          fill="#68738D"
                                        ></path>
                                        <rect
                                          x="9.40625"
                                          y="7.23975"
                                          width="31.3528"
                                          height="33.2562"
                                          fill="white"
                                        ></rect>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M49.9746 25.3235C49.9752 30.2043 48.5101 34.9756 45.7647 39.034C43.0193 43.0925 39.1168 46.2557 34.5508 48.1238C29.9849 49.9918 24.9606 50.4807 20.1132 49.5287C15.2659 48.5766 10.8133 46.2264 7.31863 42.7751C3.82392 39.3239 1.44405 34.9268 0.479997 30.1397C-0.484054 25.3527 0.0110189 20.3909 1.9026 15.8817C3.79418 11.3726 6.9973 7.51873 11.1069 4.80747C15.2164 2.0962 20.0479 0.649353 24.9901 0.649903C31.6162 0.650639 37.9707 3.25041 42.656 7.87745C47.3414 12.5045 49.9739 18.7799 49.9746 25.3235ZM17.8999 35.1429H13.0606C12.0421 35.1429 11.5385 35.143 11.2318 34.9485C11.069 34.8449 10.9332 34.7049 10.8354 34.5397C10.7376 34.3746 10.6806 34.1891 10.6691 33.9982C10.6522 33.6397 10.9026 33.2035 11.4062 32.331L23.378 11.4918C23.8872 10.6083 24.1461 10.1665 24.4724 10.0025C24.6463 9.9134 24.8393 9.86687 25.0352 9.86687C25.231 9.86687 25.424 9.9134 25.5979 10.0025C25.9214 10.1665 26.1803 10.6083 26.6895 11.4918L29.1514 15.7347V15.7569C29.7141 16.7072 29.9814 17.1879 30.1024 17.7019C30.2375 18.2553 30.2375 18.8324 30.1024 19.3857C29.9814 19.897 29.7029 20.3805 29.1458 21.3307L22.8575 32.3088L22.8406 32.3366C22.2779 33.2952 21.9965 33.7815 21.6167 34.1455C21.1953 34.5433 20.6842 34.8366 20.1255 35.0012C19.6218 35.1429 19.0507 35.1429 17.9084 35.1429H17.8999ZM30.1446 35.1429H37.0941C38.1183 35.1429 38.6331 35.143 38.9426 34.9429C39.1062 34.8388 39.2424 34.6978 39.3402 34.5317C39.438 34.3656 39.4946 34.1789 39.5053 33.9871C39.5222 33.6397 39.2774 33.2202 38.7935 32.3977L38.7457 32.3116L35.2653 26.4322L35.2259 26.3683C34.7363 25.5514 34.4888 25.1374 34.1708 24.979C33.9986 24.8926 33.8083 24.8476 33.6151 24.8476C33.422 24.8476 33.2316 24.8926 33.0595 24.979C32.7415 25.1429 32.4827 25.5736 31.9734 26.4405L28.5071 32.3199V32.3394C28.0007 33.2035 27.7474 33.637 27.7643 34.0065C27.7759 34.1982 27.8329 34.3845 27.9306 34.5505C28.0283 34.7165 28.1641 34.8575 28.327 34.9623C28.614 35.1429 29.1289 35.1429 30.153 35.1429H30.1446Z"
                                          fill="#68738D"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip3456">
                                          <rect
                                            width="246.75"
                                            height="49.35"
                                            fill="white"
                                            transform="translate(0 0.649902)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-6d75bab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="6d75bab"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3e5712a"
                        data-id="3e5712a"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-e960480 elementor-widget elementor-widget-heading"
                              data-id="e960480"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h2 className="elementor-heading-title elementor-size-default">
                                  Save <span>time and money</span> {" "}while bidding and buying your favorite NFTs{" "} on the go.
                                    Surf all of the most scalable collections on the Blockchain in one interface.
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4e30584"
                        data-id="4e30584"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-908769e elementor-widget elementor-widget-counter"
                              data-id="908769e"
                              data-element_type="widget"
                              data-widget_type="counter.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-counter">
                                  <div className="elementor-counter-number-wrapper">
                                    {" "}
                                    <span className="elementor-counter-number-prefix"></span>{" "}
                                    <span
                                      className="elementor-counter-number"
                                      data-duration="2000"
                                      data-to-value="87"
                                      data-from-value="0"
                                      data-delimiter=","
                                    >
                                      87
                                    </span>{" "}
                                    <span className="elementor-counter-number-suffix">
                                      %
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-a77cb47 elementor-widget elementor-widget-text-editor"
                              data-id="a77cb47"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">

                                  Average Reduction<br/> In Time-To-NFT-Market Sale

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ec90866"
                        data-id="ec90866"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-d9e05c4 elementor-widget elementor-widget-counter"
                              data-id="d9e05c4"
                              data-element_type="widget"
                              data-widget_type="counter.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-counter">
                                  <div className="elementor-counter-number-wrapper">

                                    <span className="elementor-counter-number-prefix">
                                      $
                                    </span>
                                    <span
                                      className="elementor-counter-number"
                                      data-duration="2000"
                                      data-to-value="86.4"
                                      data-from-value="0"
                                      data-delimiter=","
                                    >
                                      86.4
                                    </span>
                                    <span className="elementor-counter-number-suffix">
                                      M
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-f6b6637 elementor-widget elementor-widget-text-editor"
                              data-id="f6b6637"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">

                                  Total Trading Costs Saved
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  className="elementor-element elementor-element-03cf80c elementor-widget elementor-widget-heading"
                  data-id="03cf80c"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">
                      The Bidding Workflow
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-02a6dca boxNumber elementor-widget elementor-widget-heading"
                  data-id="02a6dca"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    {" "}
                    <span className="elementor-heading-title elementor-size-default">
                      1
                    </span>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1e47d58 elementor-widget elementor-widget-heading"
                  data-id="1e47d58"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Authenticate To View NFT Market Items Below
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e3d726e textBox elementor-widget elementor-widget-text-editor"
                  data-id="e3d726e"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                    Moralis has gained wide acceptance and become welcomed by the Blockchain as it brings along with it loads of tools, features and resources that aid adoption and foster the growth and development of Web3.
With an ever growing family of bidders, holders and sellers alike, Moralis is rapidly becoming greatly accepted and used by crypto enthusiasts and veterans as it saves up to 80% of time. Also, it allows bids and trades at zero cost across all marketplaces thanks to an optimized contract with features such as the MSBS (Moralis Simultaneous Bidding System).
     <span> When bids are placed on Moralis, they  are automatically placed on selected item(s) in a project's collection wherever they are listed. This has made it possible for potential buyers to bid across colections listed on Opensea, Rarible, and Looksrear amongst others </span>
 and at the best rates.
Connect your wallet using the "authenticate" button and start bidding right away.

                    </div>
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-b04af32 elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="b04af32"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-90beb53"
                        data-id="90beb53"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-2c512e1 elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="2c512e1"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_effect":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":2,"sizes":[]},"motion_fx_mouseTrack_direction":"negative","_animation_mobile":"none"}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="145"
                                      height="129"
                                      viewBox="0 0 145 129"
                                      fill="none"
                                    >
                                      <path
                                        d="M109.254 40.0534C106.661 38.5706 103.327 38.5706 100.364 40.0534L79.6199 52.2865L65.5437 60.0713L45.1701 72.3044C42.5771 73.7872 39.2433 73.7872 36.2799 72.3044L20.3515 62.6662C17.7585 61.1834 15.9063 58.2177 15.9063 54.8814V36.3463C15.9063 33.3807 17.388 30.4151 20.3515 28.5616L36.2799 19.2941C38.8729 17.8113 42.2067 17.8113 45.1701 19.2941L61.0985 28.9323C63.6915 30.4151 65.5437 33.3807 65.5437 36.7171V48.9502L79.6199 40.7948V28.1909C79.6199 25.2253 78.1382 22.2597 75.1748 20.4062L45.5406 2.9832C42.9476 1.50039 39.6137 1.50039 36.6503 2.9832L6.27521 20.7769C3.31179 22.2597 1.83008 25.2253 1.83008 28.1909V63.0369C1.83008 66.0025 3.31179 68.9681 6.27521 70.8216L36.2799 88.2446C38.8729 89.7274 42.2067 89.7274 45.1701 88.2446L65.5437 76.3821L79.6199 68.2267L99.9935 56.3642C102.586 54.8814 105.92 54.8814 108.884 56.3642L124.812 65.6318C127.405 67.1146 129.257 70.0802 129.257 73.4165V91.9516C129.257 94.9172 127.776 97.8828 124.812 99.7363L109.254 109.004C106.661 110.487 103.327 110.487 100.364 109.004L84.4355 99.7363C81.8425 98.2535 79.9904 95.2879 79.9904 91.9516V80.0891L65.9141 88.2446V100.478C65.9141 103.443 67.3958 106.409 70.3592 108.262L100.364 125.685C102.957 127.168 106.291 127.168 109.254 125.685L139.259 108.262C141.852 106.78 143.704 103.814 143.704 100.478V65.2611C143.704 62.2955 142.222 59.3298 139.259 57.4763L109.254 40.0534Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-41d715f elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="41d715f"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_mouseTrack_effect":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":1,"sizes":[]}}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="138"
                                      height="124"
                                      viewBox="0 0 138 124"
                                      fill="none"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M35.6303 122H13.0989C8.36442 122 6.02577 122 4.59982 121.08C3.05963 120.072 2.11847 118.403 2.00439 116.561C1.91874 114.864 3.08823 112.791 5.42688 108.647L61.0596 9.70509C63.4269 5.50358 64.6247 3.40282 66.1363 2.62588C67.7619 1.79137 69.7014 1.79137 71.3271 2.62588C72.8387 3.40282 74.0366 5.50358 76.4037 9.70509L87.8407 29.8492L87.899 29.9519C90.4558 34.4593 91.7523 36.7451 92.3184 39.1441C92.9458 41.7629 92.9458 44.5254 92.3184 47.1442C91.748 49.5615 90.4646 51.8637 87.8692 56.4393L58.6466 108.561L58.571 108.694C55.9974 113.239 54.6931 115.542 52.8855 117.28C50.9175 119.18 48.5503 120.56 45.9548 121.339C43.5876 122 40.9353 122 35.6303 122ZM92.5295 122H124.814C129.577 122 131.973 122 133.4 121.052C134.94 120.044 135.909 118.345 135.996 116.505C136.078 114.862 134.934 112.87 132.692 108.967C132.615 108.834 132.538 108.699 132.459 108.562L116.287 80.6478L116.103 80.3335C113.831 76.4561 112.684 74.498 111.21 73.7412C109.586 72.9066 107.673 72.9066 106.048 73.7412C104.565 74.5182 103.367 76.5614 101 80.6765L84.8859 108.59L84.8307 108.687C82.4718 112.795 81.2928 114.848 81.3779 116.533C81.492 118.375 82.4331 120.072 83.9731 121.08C85.3708 122 87.7665 122 92.5295 122Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-de6a4b6 elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="de6a4b6"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_mouseTrack_effect":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":1.4,"sizes":[]}}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="66"
                                      height="111"
                                      viewBox="0 0 66 111"
                                      fill="none"
                                    >
                                      <g clipPath="url(#clip0_2090_22201)">
                                        <path
                                          d="M64.0612 19.4792L33.1126 37.4623L1.89258 19.4792L32.8412 1.49609L64.0612 19.4792Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M32.931 37.4636L32.8405 73.2491L1.71094 55.266L1.80143 19.4805L32.931 37.4636Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M64.1517 19.4805L64.2422 55.266L33.1126 73.2491L32.9316 37.4636L64.1517 19.4805Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M64.0612 55.3562L33.1126 73.3393L1.89258 55.3562L32.8412 37.373L64.0612 55.3562Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M32.931 73.3386L32.8405 109.124L1.71094 91.141L1.80143 55.3555L32.931 73.3386Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M64.1517 55.3555L64.2422 91.141L33.1126 109.124L32.9316 73.3386L64.1517 55.3555Z"
                                          stroke="#E6EDFF"
                                          strokeWidth="2.42106"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_2090_22201">
                                          <rect
                                            width="64.8834"
                                            height="109.887"
                                            fill="white"
                                            transform="translate(0.535156 0.322266)"
                                          ></rect>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-7d2253c elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="7d2253c"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_mouseTrack_effect":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":1.6,"sizes":[]}}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="99"
                                      height="158"
                                      viewBox="0 0 99 158"
                                      fill="none"
                                    >
                                      <path
                                        d="M49.6475 2L49.6476 108.698L97.2079 80.672L49.6475 2Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M49.5617 2L2 80.672L49.5617 108.698V59.1205V2Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M49.6475 59.1367L49.6476 108.698L97.2079 80.6718L49.6475 59.1367Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M49.5617 59.1375L2 80.6726L49.5617 108.699V59.1211V59.1375Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M49.8008 117.66H49.8012L49.8008 156.463L97.3904 89.6484L49.8008 117.66Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M49.5617 156.463V117.66L2 89.6484L49.5617 156.463Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-519601e elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="519601e"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_mouseTrack_effect":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_speed":{"unit":"px","size":0.5,"sizes":[]}}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="113"
                                      height="113"
                                      viewBox="0 0 113 113"
                                      fill="none"
                                    >
                                      <path
                                        d="M35.3153 47.7806L56.4737 26.6221L77.6422 47.7898L89.9533 35.4787L56.4737 2L23.0051 35.4687L35.3157 47.7797L35.3153 47.7806ZM2 56.4737L14.3115 44.1605L26.6221 56.4711L14.3106 68.7826L2 56.4737ZM35.3153 65.1682L56.4737 86.3254L77.6418 65.1582L89.9594 77.4627L89.9533 77.4692L56.4737 110.947L23.0051 77.4788L22.9876 77.4614L35.3166 65.1669L35.3153 65.1682ZM86.3254 56.479L98.6369 44.1675L110.947 56.4781L98.6364 68.7896L86.3254 56.479Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                      <path
                                        d="M68.9597 56.467H68.965L56.4735 43.9746L47.2404 53.2051L46.1797 54.2662L43.992 56.4543L43.9746 56.4713L43.992 56.4892L56.4735 68.9724L68.9658 56.48L68.9719 56.4731L68.9606 56.467"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-fbe095a elementor-absolute superIcon elementor-view-default elementor-widget elementor-widget-icon elementor-motion-effects-parent"
                              data-id="fbe095a"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_mouseTrack_effect":"yes","motion_fx_motion_fx_mouse":"yes","motion_fx_mouseTrack_direction":"negative","motion_fx_mouseTrack_speed":{"unit":"px","size":0.7,"sizes":[]}}'
                              data-widget_type="icon.default"
                            >
                              <div className="elementor-widget-container elementor-motion-effects-element">
                                <div className="elementor-icon-wrapper">
                                  <div className="elementor-icon">

                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="131"
                                      height="97"
                                      viewBox="0 0 131 97"
                                      fill="none"
                                    >
                                      <path
                                        d="M32.3118 70.3415C32.9572 69.6966 33.8445 69.3203 34.7857 69.3203H120.134C121.694 69.3203 122.474 71.2015 121.371 72.3034L104.511 89.1539C103.866 89.7989 102.978 90.1751 102.037 90.1751H16.6888C15.1292 90.1751 14.3494 88.2939 15.4519 87.192L32.3118 70.3415Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                      ></path>
                                      <path
                                        d="M32.3118 7.42749C32.9841 6.7825 33.8714 6.40625 34.7857 6.40625H120.134C121.694 6.40625 122.474 8.28748 121.371 9.38935L104.511 26.2398C103.866 26.8848 102.978 27.261 102.037 27.261H16.6888C15.1292 27.261 14.3494 25.3798 15.4519 24.2779L32.3118 7.42749Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                      ></path>
                                      <path
                                        d="M104.511 38.6833C103.866 38.0384 102.978 37.6621 102.037 37.6621H16.6888C15.1292 37.6621 14.3494 39.5433 15.4519 40.6452L32.3118 57.4957C32.9572 58.1407 33.8445 58.5169 34.7857 58.5169H120.134C121.694 58.5169 122.474 56.6357 121.371 55.5338L104.511 38.6833Z"
                                        stroke="#E6EDFF"
                                        strokeWidth="2.42106"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-1841d96 elementor-widget elementor-widget-shortcode elementor-motion-effects-parent"
                              data-id="1841d96"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":20,"end":70}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":40}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="shortcode.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  translateY: "90px",
  eTransformTransitionDuration: "100ms",
  transform: "translateY(var(--translateY))",
  opacity: "0",
  willChange: "opacity"
  }}
                              >
                                <div className="fadeinCustom">
                                  <img
                                    id="f2"
                                    className="skip-lazy"
                                    src="https://moralis.io/wp-content/uploads/homePage4/metamask.svg"
                                  ></img>

                                </div>

                                <div className="elementor-shortcode"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-87a9c8c"
                        data-id="87a9c8c"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-e7bb14f elementor-widget elementor-widget-heading"
                              data-id="e7bb14f"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Easy Authentication
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-805af3c elementor-widget elementor-widget-text-editor"
                              data-id="805af3c"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  seemlessly link your wallet

                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-9210e7e elementor-widget elementor-widget-heading"
                              data-id="9210e7e"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Flexible Identity Management
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-c75d27a elementor-widget elementor-widget-text-editor"
                              data-id="c75d27a"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  {" "}
                                  Consolidate ETH addresses across multiple
                                  networks and auth providers into a single
                                  user profile.
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5ca1721 elementor-widget elementor-widget-heading"
                              data-id="5ca1721"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Effortless Session Management
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-aa3ec06 elementor-widget elementor-widget-text-editor"
                              data-id="aa3ec06"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  {" "}
                                  Create, verify and invalidate Bids when you are purchaing an NFT in every session.
                                  Moralis handles all the complex heavy
                                  lifting such as wallet signature,Time-Stamp and placing your bid instantly on all marketplaces where the nft collection is lsited ensuring you get the best buy.

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-2fbbb53 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="2fbbb53"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-582d303"
            data-id="582d303"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-c3fa984 boxNumberLine e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="c3fa984"
                  data-element_type="widget"
                  data-settings='{"_transform_rotateZ_effect":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      {" "}
                      <span className="elementor-divider-separator"> </span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1718a6a boxNumber elementor-widget elementor-widget-heading"
                  data-id="1718a6a"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    {" "}
                    <span className="elementor-heading-title elementor-size-default">
                      2
                    </span>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-98bea12 elementor-widget elementor-widget-heading"
                  data-id="98bea12"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Historic and Real-Time Transaction Monitoring
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6692ffd textBox elementor-widget elementor-widget-text-editor"
                  data-id="6692ffd"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      {" "}
                      Once  authenticated you need to monitor your
                      transfers, trades, mints, burns and all other actions
                      relevant to your web3 experience. <span>
                        Moralis Monitoring
                      </span>{" "}
                      was built with the aim to save you a mountain of ETH  when bidding and while buying NFTs and digital assets.
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-165d439 elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="165d439"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":40}},"motion_fx_devices":["desktop","tablet"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]}}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">
                      <img
                        src="https://moralis.io/wp-content/uploads/homePage4/moralisMonitoring3.svg"
                        title=""
                        alt="Historic and Real-Time Transaction Monitoring"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-8f3b3aa elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="8f3b3aa"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":30,"end":70}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":40}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"

                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  translateY: "20.1px",
  eTransformTransitionDuration: "100ms",
  transform: "translateY(var(--translateY))",
  opacity: "1px",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">

                      <img
                        className="lazy"
                        src="https://moralis.io/wp-content/uploads/homePage4/moralisMonitoring3.svg"
                        data-src="https://moralis.io/wp-content/uploads/homePage4/moralisMonitoringMobile3.svg"
                        title=""
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-4b28459 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="4b28459"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-46abf9e"
            data-id="46abf9e"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-15a6740 boxNumberLine e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="15a6740"
                  data-element_type="widget"
                  data-settings='{"_transform_rotateZ_effect":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      {" "}
                      <span className="elementor-divider-separator"> </span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-899bc50 boxNumber elementor-widget elementor-widget-heading"
                  data-id="899bc50"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    {" "}
                    <span className="elementor-heading-title elementor-size-default">
                      3
                    </span>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-89c1f68 elementor-widget elementor-widget-heading"
                  data-id="89c1f68"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                    Powerful platform SDKs
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-c1c3bd8 textBox elementor-widget elementor-widget-text-editor"
                  data-id="c1c3bd8"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                      By interacting with the morali's SDK (Software Development Kit), you opt in to getting all the work done by the system while you focus on the marketplace.
What this means is that the smart contract protocol performs specified backend tasks while you get to surf,bid and purchase from the ever artistic collections listed across NFT marketplaces without the fear of infiltration from alien bodies. It is 100% tested, trusted and reliable.
                      </p>
                    </div>
                  </div>
                </div>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-2450f1a elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="2450f1a"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-50e974a"
                        data-id="50e974a"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-e60dc72 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="e60dc72"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":45}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    src="https://moralis.io/wp-content/uploads/homePage4/frameworksReact.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-a0fc222 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="a0fc222"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":45}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    src="https://moralis.io/wp-content/uploads/homePage4/frameworksJS.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-3a2ee6f elementor-absolute elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="3a2ee6f"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":55}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    className="lazy"
                                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                                    data-src="https://moralis.io/wp-content/uploads/homePage4/frameworksLine2.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4155d3b"
                        data-id="4155d3b"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-0f3fb0e elementor-widget elementor-widget-heading"
                              data-id="0f3fb0e"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Web SDKs
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-5e470a2 elementor-widget elementor-widget-text-editor"
                              data-id="5e470a2"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                   Using our dedicted SDK,
                                    Turn your web browser into a Decentralized (Dapp) Web3 Browser.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-c324ac3 elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="c324ac3"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0221ce8"
                        data-id="0221ce8"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-6f893f5 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="6f893f5"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":45}},"_animation_mobile":"none","motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">
                                  <img
                                    src="https://moralis.io/wp-content/uploads/homePage4/frameworksUnity.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-ede0070 elementor-absolute elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="ede0070"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":55}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    className="lazy"
                                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                                    data-src="https://moralis.io/wp-content/uploads/homePage4/frameworksLine2.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-abf4905"
                        data-id="abf4905"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-914513a elementor-widget elementor-widget-heading"
                              data-id="914513a"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Game SDK
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-0e67926 elementor-widget elementor-widget-text-editor"
                              data-id="0e67926"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    Build web3 gamefi NFTs for any platform
                                    including web, mobile, Xbox and
                                    Playstation using Moralis Unity SDK.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-5f8b4bc elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default"
                  data-id="5f8b4bc"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e064721"
                        data-id="e064721"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-b871240 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="b871240"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":45}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    src="https://moralis.io/wp-content/uploads/homePage4/frameworksNode.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-acf95de elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="acf95de"
                              data-element_type="widget"
                              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":45}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    src="https://moralis.io/wp-content/uploads/homePage4/frameworksC.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-d5fbdf8 elementor-absolute elementor-widget elementor-widget-image elementor-motion-effects-parent"
                              data-id="d5fbdf8"
                              data-element_type="widget"
                              data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":55}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                              data-widget_type="image.default"
                            >
                              <div
                                className="elementor-widget-container elementor-motion-effects-element"
                                style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                              >
                                <div className="elementor-image">

                                  <img
                                    className="lazy"
                                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                                    data-src="https://moralis.io/wp-content/uploads/homePage4/frameworksLine2.svg"
                                    title=""
                                    alt=""
                                  ></img>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e1cc793"
                        data-id="e1cc793"
                        data-element_type="column"
                      >
                        <div className="elementor-column-wrap elementor-element-populated">
                          <div className="elementor-widget-wrap">
                            <div
                              className="elementor-element elementor-element-07763c6 elementor-widget elementor-widget-heading"
                              data-id="07763c6"
                              data-element_type="widget"
                              data-widget_type="heading.default"
                            >
                              <div className="elementor-widget-container">
                                <h4 className="elementor-heading-title elementor-size-default">
                                  Backend SDK
                                </h4>
                              </div>
                            </div>
                            <div
                              className="elementor-element elementor-element-d255746 elementor-widget elementor-widget-text-editor"
                              data-id="d255746"
                              data-element_type="widget"
                              data-widget_type="text-editor.default"
                            >
                              <div className="elementor-widget-container">
                                <div className="elementor-text-editor elementor-clearfix">
                                  <p>
                                    Connect your backend infrastructure to
                                    web3 and all Moralis features using our
                                    SDK.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-48c0ba9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="48c0ba9"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c4c498b"
            data-id="c4c498b"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-5a05f7e boxNumberLine e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                  data-id="5a05f7e"
                  data-element_type="widget"
                  data-settings='{"_transform_rotateZ_effect":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"px","size":90,"sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"px","size":"","sizes":[]}}'
                  data-widget_type="divider.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      {" "}
                      <span className="elementor-divider-separator"> </span>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1b79152 boxNumber elementor-widget elementor-widget-heading"
                  data-id="1b79152"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    {" "}
                    <span className="elementor-heading-title elementor-size-default">
                      4
                    </span>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1118679 elementor-widget elementor-widget-heading"
                  data-id="1118679"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Cross-chain Web3 API
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2aa22e4 textBox elementor-widget elementor-widget-text-editor"
                  data-id="2aa22e4"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      {" "}
                      Get in-depth data about NFTs, tokens, user balances,
                      transactions, trades and much more!
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-cf593a8 elementor-hidden-mobile elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="cf593a8"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":35}},"motion_fx_devices":["desktop","tablet"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]}}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  eTransformTransitionDuration: "100ms",
  opacity: "0px",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">

                      <img
                        src="https://moralis.io/wp-content/uploads/homePage4/web3APIn3.svg"
                        title=""
                        alt="Cross-chain Web3 API"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4ab6e42 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="4ab6e42"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":30,"end":70}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":35}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"

                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  translateY: "20.1px",
  eTransformTransitionDuration: "100ms",
  transform: "translateY(var(--translateY))",
  opacity: "1",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">

                      <img
                        className="lazy"

                        src="https://moralis.io/wp-content/uploads/homePage4/web3APIn3.svg"
                        data-src="https://moralis.io/wp-content/uploads/homePage4/Moralis-Cross-chain-API-MOBILE-53.svg"
                        title=""
                        alt="Cross-chain Web3 API"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6704452 elementor-align-center elementor-mobile-align-center elementor-widget-tablet__width-inherit elementor-hidden-mobile elementor-widget elementor-widget-button"
                  data-id="6704452"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      {" "}
                      <a
                        href="/NFTMarketPlace"
                        target="_blank"
                        className="elementor-button-link elementor-button elementor-size-md"
                        role="button"
                      >
                        {" "}
                        <span className="elementor-button-content-wrapper">
                          {" "}
                          <span className="elementor-button-icon elementor-align-icon-left">
                            {" "}
                            <i
                              aria-hidden="true"
                              className="far fa-arrow-alt-circle-right"
                            ></i>{" "}
                          </span>{" "}
                          <span className="elementor-button-text">
                            Start placing Bids on your favorite collections for free
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a4769ab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="a4769ab"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a4a2026"
            data-id="a4a2026"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-9870553 elementor-widget elementor-widget-heading"
                  data-id="9870553"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Endless Integrations with an Ecosystem of NFT marketplaces
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-fef3538 textBox elementor-widget elementor-widget-text-editor"
                  data-id="fef3538"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        Moralis supports many chains and we are already
                        powering many prominent NFT projects .
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4512fa4 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="4512fa4"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":2,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":50,"end":80}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":80}},"motion_fx_blur_effect":"yes","motion_fx_blur_level":{"unit":"px","size":25,"sizes":[]},"motion_fx_blur_range":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_blur_direction":"out-in"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="124"
                        height="124"
                        src="https://moralis.io/wp-content/uploads/2022/05/Pinata-Plugin.svg"
                        className="attachment-medium size-medium"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d89d76c elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="d89d76c"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":2.5,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":81}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_level":{"unit":"px","size":4,"sizes":[]},"motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":60}},"motion_fx_blur_effect":"yes","motion_fx_blur_level":{"unit":"px","size":4,"sizes":[]},"motion_fx_blur_range":{"unit":"%","size":"","sizes":{"start":20,"end":60}},"motion_fx_devices":["desktop"],"motion_fx_opacity_direction":"out-in","motion_fx_blur_direction":"out-in"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="124"
                        height="124"
                        src="https://moralis.io/wp-content/uploads/2022/05/Opensea-Plugin.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-7e65fdc elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="7e65fdc"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3,"sizes":[]},"motion_fx_opacity_effect":"yes","motion_fx_opacity_level":{"unit":"px","size":8.6,"sizes":[]},"motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_blur_effect":"yes","motion_fx_blur_level":{"unit":"px","size":8,"sizes":[]},"motion_fx_blur_range":{"unit":"%","size":"","sizes":{"start":20,"end":76}},"motion_fx_devices":["desktop"],"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_opacity_direction":"out-in","motion_fx_blur_direction":"out-in"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="124"
                        height="124"
                        src="https://moralis.io/wp-content/uploads/2022/05/Exchange-Plugin.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-b918423 elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="b918423"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3.3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":80}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":50}},"motion_fx_blur_effect":"yes","motion_fx_blur_level":{"unit":"px","size":4,"sizes":[]},"motion_fx_blur_range":{"unit":"%","size":"","sizes":{"start":20,"end":60}},"motion_fx_devices":["desktop"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_blur_direction":"out-in"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="143"
                        height="143"
                        src="https://moralis.io/wp-content/uploads/2022/05/rockStar4.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-321a6be elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="321a6be"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3.3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":70}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":60}},"motion_fx_blur_effect":"yes","motion_fx_blur_level":{"unit":"px","size":4,"sizes":[]},"motion_fx_devices":["desktop"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_blur_direction":"out-in","motion_fx_blur_range":{"unit":"%","size":"","sizes":{"start":20,"end":80}}}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="124"
                        height="124"
                        src="https://moralis.io/wp-content/uploads/2022/05/1inch-Plugin.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e199dad elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image"
                  data-id="e199dad"
                  data-element_type="widget"
                  data-settings='{"_position":"absolute","motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3.5,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":0,"end":70}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":100}},"motion_fx_devices":["desktop"],"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]}}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">

                      <img
                        width="783"
                        height="419"
                        src="https://moralis.io/wp-content/uploads/2022/05/blur-plugins-noshadow-3.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-49908b5 elementor-hidden-desktop elementor-widget elementor-widget-image elementor-motion-effects-parent"
                  data-id="49908b5"
                  data-element_type="widget"
                  data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":3,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%","size":"","sizes":{"start":20,"end":50}},"motion_fx_opacity_effect":"yes","motion_fx_opacity_range":{"unit":"%","size":"","sizes":{"start":0,"end":40}},"motion_fx_opacity_direction":"out-in","motion_fx_opacity_level":{"unit":"px","size":10,"sizes":[]},"motion_fx_devices":["desktop","tablet","mobile"]}'
                  data-widget_type="image.default"
                >
                  <div
                    className="elementor-widget-container elementor-motion-effects-element"
                    style={{
  translateY: "90px",
  eTransformTransitionDuration: "100ms",
  transform: "translateY(var(--translateY))",
  opacity: "0",
  willChange: "opacity"
  }}
                  >
                    <div className="elementor-image">

                      <img
                        src="https://moralis.io/wp-content/uploads/nhp/moralisEcosystem.svg"
                        title=""
                        alt="Endless Integrations with an Ecosystem of Plugins"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-8fc11d6 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="8fc11d6"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d3749d0"
            data-id="d3749d0"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-4038b23 elementor-widget elementor-widget-template"
                  data-id="4038b23"
                  data-element_type="widget"
                  data-widget_type="template.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-template">
                      <div
                        data-elementor-type="section"
                        data-elementor-id="10988"
                        className="elementor elementor-10988"
                      >
                        <div className="elementor-section-wrap">
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-b26cd32 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="b26cd32"
                            data-element_type="section"
                            data-settings='{"background_background":"gradient"}'
                          >
                            <div className="elementor-background-overlay"></div>
                            <div className="elementor-container elementor-column-gap-default">
                              <div className="elementor-row">
                                <div
                                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f2d0cda"
                                  data-id="f2d0cda"
                                  data-element_type="column"
                                >
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div
                                        className="elementor-element elementor-element-63c008f elementor-widget elementor-widget-heading"
                                        data-id="63c008f"
                                        data-element_type="widget"
                                        data-widget_type="heading.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <h5 className="elementor-heading-title elementor-size-default">
                                            Ready to{" "}
                                            <span>Start Owning NFTs?</span>
                                          </h5>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-4b4a921 textBox elementor-widget elementor-widget-text-editor"
                                        data-id="4b4a921"
                                        data-element_type="widget"
                                        data-widget_type="text-editor.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            {" "}
                                            Get in-depth data about NFTs,
                                            tokens, user balances,
                                            transactions, trades and much
                                            more!
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-f036cfb elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button"
                                        data-id="f036cfb"
                                        data-element_type="widget"
                                        data-widget_type="button.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="elementor-button-wrapper">
                                            {" "}
                                            <a
                                              href="/NFTMarketPlace"
                                              target="_blank"
                                              className="elementor-button-link elementor-button elementor-size-md"
                                              role="button"
                                            >
                                              {" "}
                                              <span className="elementor-button-content-wrapper">
                                                {" "}
                                                <span className="elementor-button-icon elementor-align-icon-left">
                                                  {" "}
                                                  <i
                                                    aria-hidden="true"
                                                    className="far fa-arrow-alt-circle-right"
                                                  ></i>{" "}
                                                </span>{" "}
                                                <span className="elementor-button-text">
                                                  login Up
                                                </span>{" "}
                                              </span>{" "}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-element elementor-element-0867056 textBox elementor-widget elementor-widget-text-editor"
                                        data-id="0867056"
                                        data-element_type="widget"
                                        data-widget_type="text-editor.default"
                                      >
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            <p>
                                              Already have an account?{" "}
                                              <a
                                                href="/Account"
                                                target="_blank"
                                                rel="noopener"
                                              >
                                                Log in
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
  </div>

);




export default App;
