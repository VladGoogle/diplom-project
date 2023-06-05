import AddedWallet from "./AddedWallet";
import WalletForm from "./WalletForm";
import { useState, useEffect } from "react"
import AxiosInstance from "../../../utils/axios/instance";
import "./style.css"

const Wallet = () => {

    const instance = AxiosInstance();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await instance.get("/user/getByToken");
            setCard(response.data.card);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);

    return (

        <div className="wallet__settings">
            <h1 className="wallet__title">
                Wallet
            </h1>
            {loading ? (
            <p>Loading...</p>
        ) : card ? (
            <AddedWallet card={card} />
        ) : (
            <WalletForm />
        )}
        </div>

    );
}

export default Wallet;