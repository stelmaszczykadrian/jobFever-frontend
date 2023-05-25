import React from "react";
import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import JobOfferApplyModal from "./JobOfferApplyModal";
import moment from "moment";
import {StyledSalaryIcon} from "../atoms/StyledSalaryIcon";
import {StyledCalendarIcon} from "../atoms/StyledCalendarIcon";
import {StyledBagIcon} from "../atoms/StyledBagIcon";
import {StyledLocalizationIcon} from "../atoms/StyledLocalizationIcon";

function SingleOfferDetailsContainer(props) {
    const {offerDetails} = props;
    const postingDate = moment(offerDetails.postingDate);
    const expirationDate = moment(offerDetails.expirationDate);
    const remainingDays = expirationDate.diff(postingDate, 'days');

    return (
        <StyledSingleOfferDetailsContainer>
            <JobOfferApplyModal jobId={offerDetails.jobId}/>
            <div style={{display: 'flex', margin: '11%'}}>
                <StyledSalaryIcon/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h3 style={{marginBlock: 0}}>Salary</h3>
                    <p style={{marginBlock: 0}}>{offerDetails.salaryFrom}-{offerDetails.salaryTo} {offerDetails.currencyType}</p>
                </div>
            </div>
            <div style={{display: 'flex', margin: '11%'}}>
                <StyledCalendarIcon/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h3 style={{marginBlock: 0}}>Valid</h3>
                    <p style={{marginBlock: 0}}>{postingDate.format("DD/MM/YYYY")} ({remainingDays} days left)</p>
                </div>
            </div>
            <div style={{display: 'flex', margin: '11%'}}>
                <StyledBagIcon/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h3 style={{marginBlock: 0}}>Contract Type</h3>
                    <p style={{marginBlock: 0}}>{offerDetails.jobType}</p>
                </div>
            </div>
            <div style={{display: 'flex', margin: '11%'}}>
                <StyledLocalizationIcon/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h3 style={{marginBlock: 0}}>Location</h3>
                    <p style={{marginBlock: 0}}>{offerDetails.location}</p>
                </div>
            </div>
        </StyledSingleOfferDetailsContainer>
    );
}

export default SingleOfferDetailsContainer;