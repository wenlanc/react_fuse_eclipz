export const crciOptions = [
    'CKD1',
    'CKD2',
    'CKD3',
    'CKD4',
    'CKD5',
    'CKD6'
  ];
export const bmiOptions = [
    'Underweight (R63.6)',
    'Ideal',
    'Overweight (E66.3)',
    'Obesity (E66.09)',
    'Morbid obesity (E66.01)',
  ];

  export function checkValidIP(ip)
	{ 
		var ipformat = /^(((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([4-9]|[12][0-9]|3[0-2]))?)([,\s]+|$))*$/;
		if(ipformat.test(ip))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
  
  export function checkValidEmail(emailToValidate) {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(emailRegexp.test(emailToValidate)) {
      return true;
    } else {
      return false;
    }
  }

export function getCrciIndex(value) {
      var initialIndex = 0;
      if(value > 90){
        initialIndex = 0;
      } else if (value > 60) {
        initialIndex = 1;
      } else if (value > 30) {
        initialIndex = 2;
      } else if (value > 15) {
        initialIndex = 3;
      } else if (value > 0){
        initialIndex = 4;
      } else {
        initialIndex = 5;
      } 
      return initialIndex; 
  }
export function getBmiIndex(bmi) {
    var initialIndex = 0;
    if(bmi < 19){
        initialIndex = 0;
      } else if (bmi < 24) {
        initialIndex = 1;
      } else if (bmi < 30) {
        initialIndex = 2;
      } else if (bmi <= 40) {
        initialIndex = 3;
      } else {
        initialIndex = 4;
      }
    return initialIndex; 
}