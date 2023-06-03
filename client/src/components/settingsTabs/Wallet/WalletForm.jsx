import "./style.css"
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import createAxiosInstance from "../../../utils/axios/instance";
import AddedWallet from "./AddedWallet";
import { useState } from "react";

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

const WalletForm = () => {

    const instance = createAxiosInstance();
    const [showForm, setShowForm] = useState(false);

    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = async (data) => {
        try {
          await schema.validate(data);
          const requestData = { ...data, currency: 'USD' };
          const response = await instance.post('/account/card', data);
          console.log(response.data);
          setShowForm(true);
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
      <>
            {showForm ? (
              <AddedWallet /> 
            ) : (
            <div className="wallet-form__inner">
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
            <div className="agreement">
                <div className="agreement-top">
                  <svg
                    alt="exclamation_mark"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_288)">
                      <path
                        d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z"
                        fill="#1C7FF3"
                      />
                      <path
                        d="M10.5029 16.4999C10.5029 16.3029 10.5417 16.1079 10.6171 15.9259C10.6925 15.7439 10.803 15.5786 10.9423 15.4393C11.0816 15.3 11.2469 15.1895 11.4289 15.1141C11.6109 15.0387 11.8059 14.9999 12.0029 14.9999C12.1999 14.9999 12.395 15.0387 12.577 15.1141C12.7589 15.1895 12.9243 15.3 13.0636 15.4393C13.2029 15.5786 13.3134 15.7439 13.3887 15.9259C13.4641 16.1079 13.5029 16.3029 13.5029 16.4999C13.5029 16.8978 13.3449 17.2793 13.0636 17.5606C12.7823 17.8419 12.4008 17.9999 12.0029 17.9999C11.6051 17.9999 11.2236 17.8419 10.9423 17.5606C10.661 17.2793 10.5029 16.8978 10.5029 16.4999ZM10.6499 7.49243C10.63 7.30319 10.65 7.11187 10.7087 6.93087C10.7675 6.74988 10.8636 6.58325 10.9909 6.44181C11.1182 6.30037 11.2738 6.18727 11.4476 6.10986C11.6215 6.03244 11.8096 5.99243 11.9999 5.99243C12.1902 5.99243 12.3784 6.03244 12.5522 6.10986C12.726 6.18727 12.8817 6.30037 13.009 6.44181C13.1362 6.58325 13.2324 6.74988 13.2911 6.93087C13.3499 7.11187 13.3699 7.30319 13.3499 7.49243L12.8249 12.7529C12.8073 12.9596 12.7127 13.1521 12.56 13.2924C12.4072 13.4327 12.2073 13.5105 11.9999 13.5105C11.7925 13.5105 11.5927 13.4327 11.4399 13.2924C11.2871 13.1521 11.1926 12.9596 11.1749 12.7529L10.6499 7.49243Z"
                        fill="#1C7FF3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_288">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="agreement-title">
                    Agreement
                  </h4>
                </div>
                <div className="agreement-bottom">
                  <p className="agreement-text">
                  By clicking the "SAVE CARD" button, you confirm that you give your consent (acceptance) to the provision of financial services for the transfer of funds for the purpose of paying for the order/services on La Pigeon by one of the following financial partners:- JSC "TASKOMBANK", JSC "ALFA-BANK", JSC "PUMB", JSC KB "PRIVATBANK", JSC "OSCHADBANK"- LLC "FC" "EVO" (more details →)
                  </p>
                </div>
              </div>
              </div>
            )}
          </>
    );
}

export default WalletForm;
