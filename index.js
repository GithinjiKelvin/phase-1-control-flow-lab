function scuberGreetingForFeet(distance){
  // Write your code here!
  let message;
  if(distance <= 400){
    message = "This one is on me!";
  }else if(distance > 400 && distance < 2000){
    message = "That will be twenty bucks."
  }else if(distance > 2000 && distance <= 2500){
    message = 'I will gladly take your thirty bucks.'
  }else{
    message = 'No can do.'
  }

  return message

}
// ------------------- Equivalent switch statement--------

// function scuberGreetingForFeet(distance){
//   let message;
  
//   switch(true){
//     case (distance <= 400):
//       message = "This one is on me!";
//       break;
//       case (distance > 400 && distance < 2000):
//         message ="That will be twenty bucks.";
//         break;
//         case (distance > 2000 && distance <= 2500):
//           message = 'I will gladly take your thirty bucks.'
//           break;
//           default:
//             message = 'No can do.'
//             break;

//   }
//   return message
// }


function ternaryCheckCity(city){
  // Write your code here!
  let sound = city === "NYC"? ("Ok, sounds good."): ("No go.")
  return sound
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  let display;
  switch(Tip){
    case 'generous':
      display = "Thank you so much."
      break;
      case 'not as generous':
        display = "Thank you."
        break;
        case 'thanks for everything':
          display = "Bye."
          break;
  }
  return display;

}