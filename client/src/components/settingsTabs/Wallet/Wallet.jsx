import "./style.css"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import createAxiosInstance from "../../../utils/axios/instance";
import AddedWallet from "./AddedWallet";

const schema = yup.object().shape({
    number: yup
    .string()
    .required('Card number is required'),
    expMonth: yup
      .number()
      .integer('Month must be a number')
      .required('Month is required'),
    expYear: yup
      .number()
      .integer('Year must be a number')
      .required('Year is required'),
    cvc: yup
      .number()
      .integer('CVC must be a number')
      .required('CVC is required'),
    currency: yup
      .string()
      .oneOf(['USD', 'UAH'], 'Invalid currency')
      .required('Currency is required')
      .default('USD'),
  });

const Wallet = () => {

    const instance = createAxiosInstance();

    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = async (data) => {
        try {
          await schema.validate(data);
          const requestData = { ...data, currency: 'USD' };
          const response = await instance.post('/account/card', data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <div className="wallet__settings">
            <h1 className="wallet__title">
                Wallet
            </h1>
            <div className="wallet__inner">
            <AddedWallet/>
            <form className="wallet" onSubmit={handleSubmit(onSubmit)}>
                <div className="wallet__inputs">
                    <div className="wallet__input-top">
                        <input
                        placeholder="Card number"
                        name="number"
                        type="text"
                        id="number"
                        className="wallet__input wallet__input-card"
                        {...register('number')}
                    />
                    {errors.number && <span className="error-message">{errors.number.message}</span>}
                    </div>
                    <div className="wallet__input-bottom">
                        <div className="wallet__input-expired">
                            <div className="expMonth_box">
                            <input placeholder="MM" type="tel" name="expMonth" id="expMonth" className="wallet__input wallet__input-expMonth" {...register('expMonth')}/>
                            {errors.expMonth && <span className="error-message">{errors.expMonth.message}</span>}
                            </div>
                            <span className="wallet__inner">/</span>
                            <div className="expYear_box">
                            <input placeholder="YY" type="tel" name="expYear" id="expYear" className="wallet__input wallet__input-expYear" {...register('expYear')} />
                            {errors.expYear && <span className="error-message">{errors.expYear.message}</span>}
                            </div>
                        </div>
                        <div className="cvc_box">
                        <input placeholder="CVV" type="tel" name="cvc" id="cvc" className="wallet__input wallet__input-cvv" {...register('cvc')}/>
                        {errors.cvc && <span className="error-message">{errors.cvc.message}</span>}
                        </div>
                    </div>
                    <button type="submit" className="wallet__button-submit">
                        SAVE CARD
                    </button>
                </div>
            </form>
            </div>
            <p className="wallet__additional-information">
            By clicking the "SAVE CARD" button, you confirm that you give your consent (acceptance) to the provision of financial services for the transfer of funds for the purpose of paying for the order/services on La Pigeon by one of the following financial partners:- JSC "TASKOMBANK", JSC "ALFA-BANK", JSC "PUMB", JSC KB "PRIVATBANK", JSC "OSCHADBANK"- LLC "FC" "EVO" (more details →)
            </p>
        </div>
    );
}

export default Wallet;
