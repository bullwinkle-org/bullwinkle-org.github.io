        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('.//service-worker.js?v=1660615682').then(function(reg) {
                reg.onupdatefound = function() {
                    var installingWorker = reg.installing;
                    installingWorker.onstatechange = function() {
                        switch (installingWorker.state) {
                            case 'installed':
                                if (navigator.serviceWorker.controller) {
                                    var event = new Event('sw.update');
                                    window.dispatchEvent(event);
                                }
                                break;
                        }
                    };
                };
            }).catch(function(e) {
                console.error('Error during service worker registration:', e);
            });
        }
