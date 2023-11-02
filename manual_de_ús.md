Per a complementar la documentació de la funció `throttle`, a continuació hi ha el manual d'usuari per al programa de línia de comandes `cli.ts` que utilitza aquesta funció, també redactat en català:

---

# Manual d'Usuari per al Programa de Línia de Comandes `cli.ts`

## Descripció General

Aquest programa és una eina de línia de comandes desenvolupada en TypeScript per a provar la funció `throttle`. Permet a l'usuari introduir text i veure com la funció `throttle` gestiona les entrades basant-se en un temps d'espera configurat.

## Inici del Programa

Quan s'inicia el programa, es mostrarà un missatge de benvinguda i es sol·licitarà a l'usuari que introdueixi un temps d'espera en mil·lisegons (ms). Aquest valor determinarà l'interval amb el qual la funció `throttle` permetrà l'execució de crides successives.

## Configuració del Temps d'Espera

1. **Introduir el Temps d'Espera**: Després del missatge de benvinguda, s'ha d'introduir un número enter que representa el temps d'espera en mil·lisegons.
    - Si es proporciona un valor que no és un número, es mostrarà un missatge d'error i el programa finalitzarà.

## Ús del Programa

Després d'establir el temps d'espera, el programa demanarà a l'usuari que escrigui text.

1. **Introducció de Text**: Pot escriure qualsevol cadena de text i prémer Enter.
2. **Sortida Inmediata**: El programa mostrarà immediatament el text introduït.
3. **Sortida Retardada**: Si la funció `throttle` no està activa, processarà el text introduït després del temps d'espera configurat. En cas contrari, s'indicarà a l'usuari que el `throttle` encara està actiu.

## Finalització del Programa

Per a finalitzar el programa, escriu la paraula "exit" i prem Enter. Apareixerà un missatge de comiat i el programa es tancarà.

---

Aquest manual serveix per a guiar els usuaris en l'ús del programa de línia de comandes que implementa la funció `throttle`. Si hi ha més característiques o aspectes específics del programa que desitgis incloure, si us plau, proporciona detalls addicionals.
