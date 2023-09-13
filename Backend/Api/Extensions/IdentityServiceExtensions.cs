using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Api.Extensions
{
    public static class IdentityServiceExtensions
    {
        public static void AddIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppIdentityDbContext>(opt =>
            {
                opt.UseSqlServer(configuration.GetConnectionString("IdentityConnection"));
            });

            services.AddIdentityCore<AppUser>(opt =>
            {
                //add identity options
            })
            .AddEntityFrameworkStores<AppIdentityDbContext>()
            .AddSignInManager<SignInManager<AppUser>>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Token:Key"])),
                        ValidIssuer = configuration["Token:Issuer"],
                        ValidateIssuer = true,
                        ValidateAudience = false,
                    };
                });
            services.AddAuthorization();
        }
    }
}