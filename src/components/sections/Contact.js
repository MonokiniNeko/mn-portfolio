import React, {useState} from 'react';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as envelope} from '@fortawesome/free-solid-svg-icons';

// UTILS
import emailValidator from '../../utils/emailValidator';

// STYLES
import './Contact.css'

function Contact({language}) {

    const [formData, setFormData] = useState({name:"",email:"",topic:"",message:""})
    const [isFormValid, setIsFormValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState({fr:"",en:""})
    const [isSubmit, setIsSubmit] = useState(false)

    const form = {
        title : {
            fr : "Contactez-moi !",
            en : "Contact me !"
        },
        name : {
            fr : "Nom",
            en : "Name"
        },
        nameError : {
            fr : "Votre nom doit faire entre 2 et 64 caractères.",
            en : "Your name must be between 2 and 64 characters long."
        },
        email : {
            fr : "Adresse email",
            en : "Email Address"
        },
        emailError : {
            fr : "Veuillez entrer une adresse email valide.",
            en : "You must enter a valid email address."
        },
        topic : {
            fr : "Objet",
            en : "Topic"
        },
        topicError : {
            fr : "Votre object doit faire entre 4 et 128 caractères.",
            en : "Your topic must be between 4 and 128 characters long."
        },
        message : {
            fr : "Message",
            en : "Message"
        },
        messageError : {
            fr : "Votre message doit faire entre 10 et 1280 caractères.",
            en : "Your message must be between 10 and 1280 characters long."
        },
        submit : {
            fr : "Envoyer",
            en : "Send"
        },
        submitError : {
            fr : "Veuillez compléter le formulaire de contact.",
            en : "You have to complete the contact form."
        },
        submitted : {
            fr : "Envoyé !",
            en : "Sent !"
        },
        alertSubmitted : {
            fr : "Votre message a bien été envoyé !",
            en : "Your message has been sent !"
        },
        rpgd : {
            fr : "Aucune donnée personnelle n’est conservée par ce site.",
            en : "No personal data is collected on this website."
        }
    }

    const checkLength = (data,min,max) => {
        return (data.length >= min || data <= max)
    }
    
    const checkForm = (el) => {
        let isValid = false

        const isTrue = () => {
            el.target.classList.remove("required");
            isValid = true
        }
        const isFalse = (error) => {
            el.target.classList.add("required");
            isValid = false;
            setErrorMessage(error);
        }

        switch (el.target.name) {
            case "name":
                if (checkLength(el.target.value,2,64)) {
                    isTrue()
                } else {
                    isFalse(form.nameError);
                    
                }
                break;
            case "email":
                if (checkLength(el.target.value,2,128) && emailValidator(el.target.value)) {
                    isTrue()
                } else {
                    isFalse(form.emailError);
                    
                }
                break;
            case "topic":
                if (checkLength(el.target.value,4,128)) {
                    isTrue()
                } else {
                    isFalse(form.topicError);
                    
                }
                break;
            case "message":
                if (checkLength(el.target.value,10,1280)) {
                    isTrue()
                } else {
                    isFalse(form.messageError);
                    
                }
                break;
            default:
                break;
        }
        setIsFormValid(isValid)
        return isValid

    }

    const handleChange = (el, input) => {
        checkForm(el)
        let newForm = formData;
        newForm[el.target.name] = el.target.value;
        setFormData(newForm);
        // console.log(formData)
    }

    const handleSubmit = (el) => {
        el.preventDefault()
        if (
            checkLength(formData.name, 2, 64) &&
            checkLength(formData.email, 2, 64) && emailValidator(formData.email) &&
            checkLength(formData.topic,4,128) &&
            checkLength(formData.message,10,1280)
        ) {
            setIsFormValid(true);
            submit()
            // alert('This form is inactive for the moment, sorry for the inconvenience. - Ce formulaire est inactif pour le moment, je suis désolé pour la gêne occasionnée.')
        } else {
            setIsFormValid(false);
            setErrorMessage(form.submitError)

        }
    }

    const submit = () => {
        if (isFormValid && !isSubmit) {
            const requestOptions = {
                method: 'POST',
                headers : {'Content-Type': 'application/json'},
                mode : 'cors',
                body: JSON.stringify(formData)
            };
            fetch('https://halasz.be/api/contact',requestOptions)
                .then(res => {
                    if (res.ok) {
                        console.log(res);
                        setIsSubmit(true);
                        alert(form.alertSubmitted[language] || "Your message has been sent !")
                    } else {
                        console.warn('Bad Response for the network - Mauvais réponse du réseau.')
                    }
                }).catch(error => {
                    alert('There was an error during the operation - Il y a eu une erreur avec cette opération.')
                    console.log(error)
                })
        }
    }
    

    return (
        <div className="contact">
            <form>
                <div>
                    <FontAwesomeIcon icon={envelope}/> {form.title[language] || "Contact me !"}
                </div>
                <input name="name" type="text" placeholder={form.name[language] || "Name"} minLength="2" maxLength="64" onChange={ (el) => handleChange(el,'name')} disabled={isSubmit}/>
                <input name="email" type="text" placeholder={form.email[language] || "Email address"} minLength="2" maxLength="128" onChange={ (el) => handleChange(el,'email')} disabled={isSubmit}/>
                <input name="topic" type="text" placeholder={form.topic[language] || "Topic"} minLength="4" maxLength="128"onChange={ (el) => handleChange(el,'topic')} disabled={isSubmit}/>
                <textarea name ="message" placeholder={form.message[language] || "Message"} minLength="10" maxLength="1280" onChange={ (el) => handleChange(el,'message')} disabled={isSubmit}/>
                <span>{form.rpgd[language]} 
                    <span style={{color:"red"}}> {isFormValid ? "" : errorMessage[language]}</span>
                </span>
                {
                    (isSubmit) ? 
                        <input type="submit" value={form.submitted[language] || "Sent !"} disabled="disabled" className="sent"/>
                    :
                        <input type="submit" value={form.submit[language] || "Send"} onClick={(e) => handleSubmit(e)} disabled={!isFormValid || isSubmit}/>
                }
            </form>
        </div>
    )

}

export default Contact
