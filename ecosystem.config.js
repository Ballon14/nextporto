module.exports = {
    apps: [
        {
            name: "iqbaldev-portfolio",
            script: "npm",
            args: "start",
            cwd: "/var/www/html/portfolio",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "1G",
            env: {
                NODE_ENV: "production",
                PORT: 3000,
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 3000,
            },
            log_file: "/var/www/html/logs/combined.log",
            out_file: "/var/www/html/logs/out.log",
            error_file: "/var/www/html/logs/error.log",
            log_date_format: "YYYY-MM-DD HH:mm Z",
        },
    ],
}
