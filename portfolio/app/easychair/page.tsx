import easyChairStyles from './easychair-style-ori.module.css'

export default function EasyChair() {
    return (
        <div>
            <div className="w-full overflow-x-hidden">
                <div className="mx-8 mb-4">
                    <div className="flex flex-row justify-between">
                        <p className="text-4xl font-bold">💺 EasyChair</p>
                        <button
                            className="flex flex-row bg-transparent text-purple-700 hover:bg-purple-700 hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded transition-all ml-auto"
                            id="helpBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="feather my-auto mr-1 bi bi-question-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                            </svg>
                            <p className={'my-auto'}>How to use</p>
                        </button>
                        {/*TODO: make modal*/}
                        <div id="helpModal" className="hidden modal">
                            <div className="modal-content">
                                <div className="img-guide">
                                    <img src="/howtouse-1.jpg"></img>
                                    <img src="/howtouse-2.jpg"></img>
                                </div>
                                <span id="closeHelpBtn" className="close">Close</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={easyChairStyles.cardDeck}>
                    <div className={easyChairStyles.card}>
                        <div className="space-y-4 divide-y divide-[#000000] divide-opacity-10">
                            <div className="px-4">
                                <div>
                                    <div className="flex flex-row flex-wrap md:space-x-8">
                                        <div className="flex flex-row gap-x-2 items-center">
                                            <label className={easyChairStyles.switch}>
                                                <input type="checkbox" id="manualTypeBtn"/>
                                                <span className={easyChairStyles.slider}></span>
                                            </label>
                                            <div className="text-sm">Manually type judges' calls</div>
                                        </div>
                                        <div className="flex flex-row gap-x-2 items-center">
                                            <label className={easyChairStyles.switch}>
                                                <input type="checkbox" id="topTwoBtn"/>
                                                <span className={easyChairStyles.slider}></span>
                                            </label>
                                            <div className="text-sm">Top two teams only</div>
                                        </div>
                                    </div>
                                    {/*<form id="inputDrawLink">*/}
                                    {/*    <div className="d-flex mt-1">*/}
                                    {/*        <div className="input-group input-group-sm mb-3">*/}
                                    {/*            <input type="url" className="form-control" id="drawLink"*/}
                                    {/*                   placeholder="Tabbycat draw link" required/>*/}
                                    {/*            <div className="input-group-append">*/}
                                    {/*                <button className="btn btn-outline-primary" type="submit">Import*/}
                                    {/*                    judge*/}
                                    {/*                    names*/}
                                    {/*                </button>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</form>*/}
                                </div>

                                {/*Input Decision Forms*/}
                                <form id="inputDecision">
                                    <div className="flex flex-row flex-wrap gap-x-2 pl-lg-2 pr-lg-2">
                                        <div className={'grow'}>
                                            <input
                                                type="text"
                                                className={easyChairStyles.formControl}
                                                name="judge"
                                                id="judge"
                                                placeholder="Judge"
                                                required
                                            />
                                        </div>
                                        <div className={'flex flex-row flex-wrap gap-x-2 items-center'}>
                                            <div>
                                                <select
                                                    className={`${easyChairStyles.formControl} ${easyChairStyles.customSelect}`}
                                                    name="decision1"
                                                    id="decision1"
                                                    required>
                                                    <option value="" disabled selected>1st</option>
                                                    <option value="OG">OG</option>
                                                    <option value="OO">OO</option>
                                                    <option value="CG">CG</option>
                                                    <option value="CO">CO</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input className={easyChairStyles.interchangeCheckbox}
                                                       id="interchange1-2"
                                                       type="checkbox"></input>
                                                <label className={easyChairStyles.interchangeLabel}
                                                       htmlFor="interchange1-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-arrow-left-right"
                                                         viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    className={`${easyChairStyles.formControl} ${easyChairStyles.customSelect}`}
                                                    name="decision2"
                                                    id="decision2"
                                                    required>
                                                    <option value="" disabled selected>2nd</option>
                                                    <option value="OG">OG</option>
                                                    <option value="OO">OO</option>
                                                    <option value="CG">CG</option>
                                                    <option value="CO">CO</option>
                                                </select></div>
                                            <div className="third-fourth">
                                                <input className={easyChairStyles.interchangeCheckbox}
                                                       id="interchange2-3"
                                                       type="checkbox"></input>
                                                <label className={easyChairStyles.interchangeLabel}
                                                       htmlFor="interchange2-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-arrow-left-right"
                                                         viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    className={`${easyChairStyles.formControl} ${easyChairStyles.customSelect}`}
                                                    name="decision3"
                                                    id="decision3"
                                                    required>
                                                    <option value="" disabled selected>3rd</option>
                                                    <option value="OG">OG</option>
                                                    <option value="OO">OO</option>
                                                    <option value="CG">CG</option>
                                                    <option value="CO">CO</option>
                                                </select></div>
                                            <div className="third-fourth">
                                                <input className={easyChairStyles.interchangeCheckbox}
                                                       id="interchange3-4"
                                                       type="checkbox"></input>
                                                <label className={easyChairStyles.interchangeLabel}
                                                       htmlFor="interchange3-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-arrow-left-right"
                                                         viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <select
                                                    className={`${easyChairStyles.formControl} ${easyChairStyles.customSelect}`}
                                                    name="decision4"
                                                    id="decision4"
                                                    required>
                                                    <option value="" disabled selected>4th</option>
                                                    <option value="OG">OG</option>
                                                    <option value="OO">OO</option>
                                                    <option value="CG">CG</option>
                                                    <option value="CO">CO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <button
                                                type="submit"
                                                className="w-full bg-transparent text-purple-700 hover:bg-purple-700 hover:text-white py-2 px-4 border border-purple-700 hover:border-transparent rounded transition-all ml-auto submitDecisionBtn">+
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <form id="inputDecisionManual" className="hidden">
                                    <div className="row pl-lg-2 pr-lg-2">
                                        <div className="col-lg-3 col-md-12 pt-2 p-lg-2">
                                            <input type="text" className="form-control" name="judge" id="judgeManual"
                                                   placeholder="Judge" required/>
                                        </div>
                                        <div className="col-lg-7 col-md-12 pt-2 p-lg-2">
                                            <input type="text" className="form-control" name="judge" id="decisionManual"
                                                   placeholder="1st (/) 2nd (/) 3rd (/) 4th" required/>
                                        </div>
                                        <div className="col-lg-auto col-md-12">
                                            <div className="pt-2 pr-0">
                                                <button id="submitManual"
                                                        className="btn btn-primary btn-block submitDecisionBtn">+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="errorlist" id="inputDecisionStatus"></div>
                            </div>
                            <div className="p-4 min-h-[12rem]">
                                <table className="table" id="callTable">
                                    <thead>
                                    <tr>
                                        <th className="w-[8rem]">Judge</th>
                                        <th className="w-[4rem]">1st</th>
                                        <th className="w-[4rem]">2nd</th>
                                        <th className="third-fourth-table w-[4rem]"></th>
                                        <th className="third-fourth-table w-[4rem]"></th>
                                        <th className="w-[2rem]"></th>
                                    </tr>
                                    </thead>
                                    <tbody id="callTbody"></tbody>
                                    <tfoot className="h-full bg-[rgba(0,0,0,.1)]">
                                    <tr>
                                        <td id="callTableStatus" colSpan={6}
                                            className="p-4 text-green-900 text-opacity-50 text-sm text-center">
                                            <i>There are no calls to display yet. When you input judges' calls and press
                                                the
                                                "+" button, their calls will appear here.</i>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className={easyChairStyles.card}>
                        <div className="space-y-4 divide-y divide-[#000000] divide-opacity-10">
                            <div className="px-4 min-h-[18rem]">
                                <table className="table sortable">
                                    <thead id="dissentThead">
                                    <tr>
                                        <th className="sort-order" title="Chronological team exchanges"
                                            data-toggle="tooltip">
                                        <span className="sort-order tooltip-trigger w-auto">Team
                                                comparisons</span>
                                        </th>
                                        <th className="sort-interchange w-[4rem]"
                                            title="Judges indicating interchangeability" data-toggle="tooltip">
                                        <span className="tooltip-trigger pb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="sort-interchange bi bi-arrow-left-right"
                                                 viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                                            </svg>
                                        </span>
                                        </th>
                                        <th className="sort-dissent w-[5rem] col-2"
                                            title="Judges disagreeing on the winning team" data-toggle="tooltip">
                                            <span className="sort-dissent tooltip-trigger"><b>💢</b></span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody id="dissentTable"></tbody>
                                    <tfoot className="h-full bg-[rgba(0,0,0,.1)]">
                                    <tr>
                                        <td id="dissentTableStatus" colSpan={6} className="text-muted text-center">
                                            <i>There are no team comparisons to display yet. When you input calls,
                                                team comparisons will appear here. You can input which team wins each of
                                                them as you deliberate.</i>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="list-group-item">
                                <div className="pt-2">
                                    <button type="submit" className="btn btn-primary btn-block submitDecisionBtn"
                                            id="finaliseDecisionBtn">Finalise ranks
                                    </button>
                                </div>
                                <div className="row col-12 pt-1 flex justify-items-center">
                                    <div className="pt-2 p-lg-2 pr-0 btn-group">
                                        <button className="btn btn-outline-secondary btn-no-hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                 height="24" viewBox="0 0 24 24" fill="none" stroke="#00bf8a"
                                                 stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-chevrons-up align-middle">
                                                <polyline points="17 11 12 6 7 11"></polyline>
                                                <polyline points="17 18 12 13 7 18"></polyline>
                                            </svg>
                                            1st
                                        </button>
                                        <button className="btn btn-no-hover btn-success" id="rank1">--</button>
                                    </div>
                                    <div className="pt-2 p-lg-2 pr-0 btn-group">
                                        <button className="btn btn-outline-secondary btn-no-hover">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                 height="24" viewBox="0 0 24 24" fill="none" stroke="#17a2b8"
                                                 stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 className="feather feather-chevron-up align-middle">
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                            </svg>
                                            2nd
                                        </button>
                                        <button className="btn btn-no-hover btn-info" id="rank2">--</button>
                                    </div>
                                    <div id="finalThirdFourth">
                                        <div className="pt-2 p-lg-2 pr-0 btn-group">
                                            <button className="btn btn-outline-secondary btn-no-hover">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                     height="24" viewBox="0 0 24 24" fill="none" stroke="#fd681d"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-chevron-down align-middle">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                                3rd
                                            </button>
                                            <button className="btn btn-no-hover btn-warning" id="rank3">--</button>
                                        </div>
                                        <div className="pt-2 p-lg-2 pr-0 btn-group">
                                            <button className="btn btn-outline-secondary btn-no-hover">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                     height="24" viewBox="0 0 24 24" fill="none" stroke="#d1185e"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-chevrons-down align-middle">
                                                    <polyline points="7 13 12 18 17 13"></polyline>
                                                    <polyline points="7 6 12 11 17 6"></polyline>
                                                </svg>
                                                4th
                                            </button>
                                            <button className="btn btn-no-hover btn-danger" id="rank4">--</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="errorlist" id="dissentRadioStatus"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="navbar-light container-fluid small pt-2 pb-1">
                        <div className="row mt-3 mb-2">
                            <div className="col-lg-7 col-md-6">
                                <h6>Extra functions</h6>
                                <ul className="text-muted">
                                    <li>The team comparisons table can be sorted. Clicking on "Team comparisons"
                                        sorts it chronologically, clicking on the left-right arrow symbol sorts it
                                        according to interchangeability, and clicking on the angry veins emoji sorts
                                        it according to dissenting judges.
                                    </li>
                                    <li>To cancel the resolution of a team comparison, double-click the radio button
                                        you've
                                        already
                                        clicked.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5 col-md-6 mt-2 mt-md-0">
                                <h6>About the developer</h6>
                                <p className="text-muted">
                                    EasyChair was developed by Jen Taruno as a side project (contacts down below). All
                                    credits to Tabbycat for
                                    styles.
                                </p>
                            </div>
                        </div>
                        <div className="col mt-2 mb-2">
                            <ul className="nav justify-content-center">
                                <li className="nav-item p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-github">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                        </path>
                                    </svg>
                                    <a target="_blank" rel="noopener noreferrer" className="nav-link p-0 d-inline-block"
                                       href="https://github.com/jentaruno/jentaruno.github.io/tree/main/bp-easy-chair">
                                        GitHub
                                    </a>
                                </li>
                                <li className="nav-item p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                    <a target="_blank" rel="noopener noreferrer" className="nav-link p-0 d-inline-block"
                                       href="https://instagram.com/crocky78">
                                        Instagram
                                    </a>
                                </li>
                                <li className="nav-item p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                    <a target="_blank" rel="noopener noreferrer" className="nav-link p-0 d-inline-block"
                                       href="https://www.facebook.com/jentaruno">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}