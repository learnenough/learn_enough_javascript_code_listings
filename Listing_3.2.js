> a = ["ant", "bat", "cat", 42];
[ 'ant', 'bat', 'cat', 42 ]
> a.join();                       // Join on default (comma).
'ant,bat,cat,42'
> a.join(", ");                   // Join on comma-space.
'ant, bat, cat, 42'
> a.join(" -- ");                 // Join on double dashes.
'ant -- bat -- cat -- 42'
> a.join("");                     // Join on empty space.
'antbatcat42'
