import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { IAdvertisement } from "../../../shared/types/IAdvertisement";

export interface IStepProps {
    control: Control<IAdvertisement>, 
    register: UseFormRegister<IAdvertisement>, 
    errors: FieldErrors<IAdvertisement>,
}