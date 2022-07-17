function Validator(options) { 
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
  
    var selectorRules = {};
  
    // 
    function getParent(element, selector) {
        while (element.parentElement){
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
  
    // Hàm thực hiện validate 
    function validate(inputElement,rule){
        // console.log('blur' + rule.selector)
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
  
        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }
  
                    
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
  
        return !errorMessage
    }
  
    // Lấy element của form cần validate
    var formElement = $(options.form)
    // console.log(options.rules)
  
    console.log(selectorRules);
    if(formElement){
  
        // khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();
  
            var isFormValid = true;
  
            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });
  
           
  
            if(isFormValid) {
                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
            
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        values[input.name] = input.value
                        return  values;
                    },{});
                    options.onSubmit(formValues)
                }
                // Trường hợp submit với hành vi mặc định html
                else{
                    formElement.submit();
                }
            }
        }
  
        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input ....)
        options.rules.forEach(function(rule){
  
  
            // Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }
  
            // console.log(rule)
            var inputElement = formElement.querySelector(rule.selector)
            
            // console.log(inputElement)
  
            if(inputElement){
                // Xử lý trường hợp blur ra ngoài ô input
                inputElement.onblur = function (){
                    validate(inputElement, rule) 
                }
  
                // Xử lý khi người dùng nhập vào inputElement
                inputElement.oninput = function (){
  
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
                
            }
        })
    }
  }
  
  // Định nghĩa Rules
  // nguyên tắc của các rule 
  // 1. khi có lỗi thì trả ra error message
  // 2. khi hợp lệ thì trả về undefined
    Validator.isRequired = function (selector, message){
        return {
            selector: selector,
            test: function (value){
                return value.trim() ? undefined : message || 'Please enter this field'
            }
        };
    }
  
    Validator.isEmail = function (selector, message){
        return {
            selector: selector,
            test: function (value){
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return regex.test(value) ? undefined : message || 'This field must be email'
            }
        };
    }
  
    Validator.minLength = function (selector, min, message){
        return {
            selector: selector,
            test: function (value){
                return value.length >= min ? undefined : message || `Please enter ${min} character`;
            }
        };
    }
  
    // Validator.isConfirmed = function (selector,getConfirmed,message){
    //     return {
    //         selector: selector,
    //         test: function (value){
    //             return value === getConfirmed() ? undefined : message || 'Giá trị nhập vào không chính xác';
    //         }
    //     }
    // }