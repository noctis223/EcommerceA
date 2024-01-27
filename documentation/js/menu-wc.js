'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ecommerce-a documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' : 'data-bs-target="#xs-components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' :
                                            'id="xs-components-links-module-AppModule-da76448ed8de91af8dba291c6b50736c28b920d5c0e75d09735d17d3602ceb737f3cabe042522fad3ee4a5c1879c5404139160df246cad7be8f48f5150becdbb"' }>
                                            <li class="link">
                                                <a href="components/AcquistaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AcquistaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AggiungiprodottoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AggiungiprodottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AggiungiquantitaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AggiungiquantitaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllordiniComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllordiniComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AllreclamiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AllreclamiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BarraComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarraComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrelloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrelloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CercabrcodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CercabrcodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CercanomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CercanomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CofereclamoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CofereclamoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CofermaresoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CofermaresoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfermacontattoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfermacontattoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfermaordineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfermaordineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfermaprodottoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfermaprodottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfermareclamoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfermareclamoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContattiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContattiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreanuovaTipologiaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreanuovaTipologiaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DettagliComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DettagliComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErroreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErroreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErroreclamoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErroreclamoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErroreresoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErroreresoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdiniComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdiniComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReclamoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReclamoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrazioneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrazioneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowimmaginedialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowimmaginedialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VediprodottoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VediprodottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizzatuttiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VisualizzatuttiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Caddy.html" data-type="entity-link" >Caddy</a>
                            </li>
                            <li class="link">
                                <a href="classes/SharedService.html" data-type="entity-link" >SharedService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImmaginiprocessService.html" data-type="entity-link" >ImmaginiprocessService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KeycloakService.html" data-type="entity-link" >KeycloakService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdottoserviceTsComponent.html" data-type="entity-link" >ProdottoserviceTsComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecurityService.html" data-type="entity-link" >SecurityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedDataService.html" data-type="entity-link" >SharedDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AcquistaprodottoserviceService.html" data-type="entity-link" >AcquistaprodottoserviceService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ProdottoEditService.html" data-type="entity-link" >ProdottoEditService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/dettagliordine.html" data-type="entity-link" >dettagliordine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExcludedUrl.html" data-type="entity-link" >ExcludedUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExcludedUrlRegex.html" data-type="entity-link" >ExcludedUrlRegex</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileHandle.html" data-type="entity-link" >FileHandle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemProduct.html" data-type="entity-link" >ItemProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeycloakEvent.html" data-type="entity-link" >KeycloakEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeycloakOptions.html" data-type="entity-link" >KeycloakOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/mieiOrdini.html" data-type="entity-link" >mieiOrdini</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ordine.html" data-type="entity-link" >Ordine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/reclamo.html" data-type="entity-link" >reclamo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tipologia.html" data-type="entity-link" >Tipologia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Utente.html" data-type="entity-link" >Utente</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});