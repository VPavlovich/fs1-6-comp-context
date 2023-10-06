import {useEffect} from "react";

// export function useWindowListener(eventType, listener) {
//     useEffect(() => {
//       window.addEventListener(eventType, listener);
//       return () => {
//         window.removeEventListener(eventType, listener);
//       };
//     }, [eventType, listener]);
//   }

const [location, setlocation] = useState(null);

export function useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setlocation({ latitude, longitude })
        },
        (error) => {
          console.log('Помилка отримання геолокації', error.message);
        }
      );
    } else {
      console.error('Геолокація не підтримується в цьому браузері');
    }
  }, []);
