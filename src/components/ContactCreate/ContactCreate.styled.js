import styled from "styled-components";
import { Form, Field } from 'formik';


export const FormPhone = styled(Form)`
    width: 400px;
    margin: 16px auto;
    padding: 8px;
    border: thick double #adadad;
    & p {
        font-size: 16px;
        color: #102d46;
        font-weight: 500;
    }
    & button {
        margin-top: 24px;
        margin-left: 24px;
        background-color: #102d46;
        border-radius: 4px;
        color:#fff;
        cursor: pointer;
        border: 1px solid transparent;
        padding: 4px 16px;        
    }
    & button:focus, button:hover{
        color: #e8e1e1;
        background-color: #2f608b;
    }
`;

export const InputPhone = styled(Field)`
    width: 50%;
    
    padding: 2px 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: #6f172b;
    background-color: #e8e1e1;
    border: 1px solid #bdbdbd;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;