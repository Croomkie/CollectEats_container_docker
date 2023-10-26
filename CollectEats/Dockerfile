# Utilisez l'image de base .NET SDK pour construire le projet
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /source

# Copiez tous les fichiers .csproj
COPY CollectEatsWeb/CollectEatsWeb.csproj CollectEatsWeb/
COPY CollectEats/CollectEats.csproj CollectEats/

# Restaurez les packages pour les deux projets
RUN dotnet restore CollectEatsWeb/CollectEatsWeb.csproj

# Copiez le reste des fichiers
COPY CollectEatsWeb/ CollectEatsWeb/
COPY CollectEats/ CollectEats/

# Publiez le projet
RUN dotnet publish -c release -o /app CollectEatsWeb/CollectEatsWeb.csproj


# Utilisez l'image .NET Runtime pour exécuter l'application
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "CollectEatsWeb.dll"]

