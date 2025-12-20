---
title: sysview
sidebar_position: 12
---

[**GitHub**](https://github.com/stefanicjuraj/sysview)

Command-line tool to list active network processes and connections. The tool uses `lsof` to query active network connections and displays all connections with their local and remote addresses.

```
Active Network Processes (48)
--------------------------------------------------------------------------------------------------
PID      COMMAND           PROTO    PORT     LOCAL ADDRESS        REMOTE ADDRESS       STATE
--------------------------------------------------------------------------------------------------
626      identitys         TCP      1024     fe80:1a::3437:40d... fe80:1a::f26f:da2... ESTABLISHED
12500    node              TCP      3000     ::1                  -                    LISTEN
580      ControlCenter     TCP      5000     0.0.0.0              -                    LISTEN
420      Brave Browser     TCP      7000     0.0.0.0              -                    LISTEN
250      Raycast           TCP      1234     127.0.0.1            -                    LISTEN
585      rapportd          TCP      52001    0.0.0.0              -                    LISTEN
...
```

```
Total Connections: 44
TCP: 37
UDP: 7
IPv4: 34
IPv6: 10
Listening: 5
Established: 31
```
