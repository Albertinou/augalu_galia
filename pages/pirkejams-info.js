import React from 'react';
import Head from 'next/head';

const PirkejamsInfo = () => {
  return (
    <div className="legal-page">
      <Head>
        <title>Pirkėjams svarbi informacija | Augalų galia</title>
      </Head>

      <h1>PIRKĖJAMS SVARBI INFORMACIJA</h1>

      <h2>1. Pardavėjo informacija ir kontaktai</h2>
      <p>Internetinė parduotuvė: Augalų galia</p>
      <p>Pardavėjas: Aidas Galkus, vykdantis individualią veiklą.</p>
      <p>Veiklos adresas: Kepėjų g. 10, Klaipėda, Lietuva.</p>
      <p>Telefonas: <a href="tel:+37069821253">+370 698 21253</a></p>
      <p>El. paštas: <a href="mailto:aidasgalkus@gmail.com">aidasgalkus@gmail.com</a></p>
      <p>Interneto svetainė: <a href="https://www.augalugalia.lt" target="_blank" rel="noreferrer">www.augalugalia.lt</a></p>
      <p>Dėl užsakymų, pristatymo, prekių grąžinimo, kokybės ar kitų su pirkimu susijusių klausimų prašome kreiptis nurodytais kontaktais.</p>

      <h2>2. Prekių pristatymas ir atsiskaitymas</h2>
      <p>Prekės pristatomos tik Lietuvos teritorijoje per ne ilgiau kaip 5 darbo dienas nuo užsakymo patvirtinimo ir apmokėjimo, jeigu su pirkėju nesusitarta kitaip.</p>
      <p>Galimi pristatymo būdai: siuntimas į paštomatus.</p>
      <p>Galimi atsiskaitymo būdai: apmokėjimas banko kortele per Stripe.</p>
      <p>Prekių kainos nurodomos eurais. Pristatymo išlaidos ir galutinė užsakymo suma pirkėjui pateikiamos prieš patvirtinant užsakymą.</p>
      <p>Jeigu dėl objektyvių priežasčių užsakymo negalima įvykdyti sutartu terminu, pirkėjas informuojamas nurodytais kontaktais. Tokiais atvejais taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl prekių pristatymo.</p>

      <h2>3. Prekių grąžinimas ir sutarties atsisakymas</h2>
      <p>Vadovaujantis Lietuvos Respublikos civilinio kodekso 6.228¹⁰ straipsniu, vartotojas turi teisę per 14 dienų nuo prekės gavimo dienos atsisakyti internetu sudarytos pirkimo–pardavimo sutarties nenurodydamas priežasties, išskyrus teisės aktuose numatytus atvejus.</p>
      <p>Norėdamas atsisakyti sutarties, pirkėjas turi apie tai pranešti el. paštu <a href="mailto:aidasgalkus@gmail.com">aidasgalkus@gmail.com</a>, pateikdamas aiškų pareiškimą apie sutarties atsisakymą, arba pasinaudoti elektroninėje parduotuvėje esančia sutarties atsisakymo funkcija.</p>
      <p>Pirkėjas privalo išsiųsti arba perduoti grąžinamą prekę per 14 dienų nuo pranešimo apie sutarties atsisakymą pateikimo.</p>
      <p>Tiesiogines tinkamos kokybės prekių grąžinimo išlaidas apmoka pirkėjas. Pirkėjas atsako už prekės vertės sumažėjimą, atsiradusį dėl veiksmų, nebūtinų prekės pobūdžiui, savybėms ir veikimui nustatyti.</p>

      <h3>Grąžinimo teisės išimtys</h3>
      <p>14 dienų sutarties atsisakymo teisė netaikoma įstatyme nurodytoms prekėms, įskaitant:</p>
      <ul>
        <li>Greitai gendančias arba trumpo galiojimo prekes.</li>
        <li>Supakuotas prekes, kurios dėl sveikatos apsaugos ar higienos priežasčių netinkamos grąžinti, jeigu po pristatymo buvo atidaryta jų apsauginė pakuotė.</li>
        <li>Kitas Civilinio kodekso 6.228¹⁰ straipsnio 2 dalyje nurodytas prekes ir sutartis.</li>
      </ul>
      <p>Maisto papildams ir kosmetikos gaminiams grąžinimo išimtys taikomos tik tuomet, kai tenkinamos įstatyme nustatytos sąlygos.</p>

      <h3>Pinigų grąžinimas</h3>
      <p>Atsisakius sutarties, pirkėjui grąžinami už prekes sumokėti pinigai ir standartinio pristatymo išlaidos ne vėliau kaip per 14 dienų nuo pranešimo apie sutarties atsisakymą gavimo. Pardavėjas turi teisę negrąžinti pinigų tol, kol gauna grąžinamą prekę arba jos išsiuntimo įrodymą.</p>
      <p>Pinigai grąžinami tuo pačiu mokėjimo būdu, kuriuo buvo atsiskaityta, nebent su pirkėju aiškiai susitariama kitaip.</p>
      <p>Šios nuostatos neriboja vartotojo teisių, kai pristatoma nekokybiška ar sutarties neatitinkanti prekė.</p>

      <h2>4. Prekių kokybė ir teisinė garantija</h2>
      <p>Visoms parduodamoms prekėms taikoma Lietuvos Respublikos teisės aktuose nustatyta teisinė atitikties garantija.</p>
      <p>Pardavėjas atsako už prekės neatitiktį, paaiškėjusią per dvejus metus nuo prekės pristatymo, atsižvelgiant į įstatymuose numatytas specialiąsias taisykles.</p>
      <p>Maisto papildams, kosmetikai ir kitoms prekėms, kurioms nustatytas tinkamumo naudoti terminas, taikomos specialios taisyklės dėl per šį terminą nustatytų trūkumų.</p>
      <p>Jeigu prekė yra nekokybiška arba neatitinka pirkimo–pardavimo sutarties, vartotojas turi teisę įstatymo nustatyta tvarka reikalauti ją pakeisti ar pataisyti, o numatytais atvejais – sumažinti prekės kainą arba nutraukti sutartį ir susigrąžinti pinigus.</p>
      <p>Dėl nekokybiškos prekės prašome kreiptis el. paštu <a href="mailto:aidasgalkus@gmail.com">aidasgalkus@gmail.com</a> ir pateikti užsakymo informaciją, nustatytų trūkumų aprašymą bei, jeigu įmanoma, nuotraukas.</p>
      <p>Vartotojų pretenzijos nagrinėjamos nemokamai. Motyvuotas rašytinis atsakymas pateikiamas ne vėliau kaip per 14 kalendorinių dienų nuo pretenzijos gavimo.</p>

      <h2>5. Vartotojų ginčų sprendimas</h2>
      <p>Jeigu vartotojas mano, kad buvo pažeistos jo teisės ar teisėti interesai, pirmiausia jis turi raštu kreiptis į pardavėją el. paštu <a href="mailto:aidasgalkus@gmail.com">aidasgalkus@gmail.com</a>, nurodydamas savo reikalavimą.</p>
      <p>Pardavėjas įsipareigoja pateikti motyvuotą rašytinį atsakymą per 14 kalendorinių dienų.</p>
      <p>Jeigu vartotojo reikalavimas netenkinamas, tenkinamas tik iš dalies arba per nustatytą terminą atsakymas nepateikiamas, vartotojas turi teisę kreiptis dėl ginčo sprendimo ne teismo tvarka į:</p>
      <p>
        Valstybinę vartotojų teisių apsaugos tarnybą (VVTAT)<br />
        Adresas: A. Goštauto g. 12, LT-01108 Vilnius.<br />
        Interneto svetainė: <a href="https://vvtat.lrv.lt" target="_blank" rel="noreferrer">vvtat.lrv.lt</a><br />
        Vartotojų teisių informacinė sistema: <a href="https://www.vtis.lt" target="_blank" rel="noreferrer">www.vtis.lt</a>
      </p>
      <p>Vartotojo teisė kreiptis į teismą nėra ribojama.</p>
    </div>
  );
};

export default PirkejamsInfo;
