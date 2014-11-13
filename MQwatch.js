/**
 *
 *          _           _                       _
 *         | |         | |                     | |
 *      ___| | __ _ ___| |____      _____  _ __| | _____
 *     / __| |/ _` / __| '_ \ \ /\ / / _ \| '__| |/ / __|
 *     \__ \ | (_| \__ \ | | \ V  V / (_) | |  |   <\__ \
 *     |___/_|\__,_|___/_| |_|\_/\_/ \___/|_|  |_|\_\___/
 *                                        web development
 *
 *     http://www.slash-works.de </> hallo@slash-works.de
 *
 *
 * @author      jrgregory
 * @copyright   jrgregory@slashworks
 * @since       13.11.14 | KW 46 12:47
 * @package     Core
 *
 */

!(function(win) {

    function getMQname() {

        return win.getComputedStyle(document.body,':after').getPropertyValue('content');

    }

    var MQWatch = win.MQWatch = (function() {

        var currentType = getMQname(),
            MQMap = {};

        win.addEventListener('DOMContentLoaded', function() {

            MQWatch.trigger(currentType);

        })

        win.addEventListener('resize', function() {

            setTimeout(function() {

                if(currentType != getMQname()) {

                    currentType = getMQname();
                    MQWatch.trigger(currentType);

                }

            }, 200)

        })


        return {

            on: function(type, callback) {

                if(!MQMap.hasOwnProperty(type)) {

                    MQMap[type] = [callback];

                } else {

                    MQMap[type].push(callback)

                }

                return this;

            },

            trigger: function(type) {

                if(MQMap.hasOwnProperty(type))
                    MQMap[type].forEach(function(f) {

                        f(type);

                    });


            }

        }

    })();

})(window);