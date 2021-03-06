#damn-you-form-assist

A [native Trigger.IO plugin](https://trigger.io/docs/current/api/native_plugins/index.html) that yanks the nasty [form assistant](http://developer.apple.com/library/ios/#documentation/userexperience/conceptual/mobilehig/TranslateApp/TranslateApp.html) from Mobile Safari web views. See https://github.com/Fetchnotes/damn-you-form-assist.

##Usage

Use the API calls below after `focus()` has fired on an input.

####Javascript:
```js
forge.internal.call("damn_you_form_assist.killBar", {
  text: ""
}, (function() {
  return alert("Success!");
}), function(e) {
  return alert("Error: " + e.message);
});
```

####CoffeeScript:
```coffeescript
forge.internal.call 'damn_you_form_assist.killBar',
  text: ''
  , (->
    alert 'Success!'
  ), (e) ->
    alert 'Error: ' + e.message
```

##Compatibility
Tested on iOS5.0 - iOS6.1.

iOS6.0 leaves a thin white line above the keyboard that still needs removing. damn-you-form-assist updates the Web View size on all tested versions properly.

##License

    Copyright (c) 2013, Fetchnotes Inc.
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met: 
    
    1. Redistributions of source code must retain the above copyright notice, this
       list of conditions and the following disclaimer. 
    2. Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution. 
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
    The views and conclusions contained in the software and documentation are those
    of the authors and should not be interpreted as representing official policies, 
    either expressed or implied, of the FreeBSD Project.
