(function() {var implementors = {};
implementors["pallet_contract_operator"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;Vec&lt;&lt;T as Trait&gt;::AccountId&gt;&gt; for OperatorHasContracts&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;T as Trait&gt;::AccountId&gt; for ContractHasOperator&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;T as Trait&gt;::Parameters&gt; for ContractParameters&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_dapps_staking"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;u32&gt; for ContractsUntreatedEra&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;u32&gt; for ContractVotesUntreatedEra&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;T as Trait&gt;::AccountId&gt; for Bonded&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;StakingLedger&lt;&lt;T as Trait&gt;::AccountId, &lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt;&gt; for Ledger&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;RewardDestination&lt;&lt;T as Trait&gt;::AccountId&gt;&gt; for Payee&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;StakingParameters&gt; for ErasContractsParameters&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;EraStakingPoints&lt;&lt;T as Trait&gt;::AccountId, &lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt;&gt; for ErasStakingPoints&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt; for ErasTotalStake&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt; for TotalStakes&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;VoteCounts&gt; for AccountsVote&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;VoteCounts&gt; for ErasVotes&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_operator_trading"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;Offer&lt;&lt;T as Trait&gt;::AccountId, &lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance, &lt;T as Trait&gt;::BlockNumber&gt;&gt; for Offers&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_ovm"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;Vec&lt;u8&gt;&gt; for PredicateCodes&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;PrefabOvmModule&gt; for PredicateCache&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;PredicateContract&lt;&lt;T as Trait&gt;::Hash&gt;&gt; for Predicates&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;ChallengeGame&lt;&lt;T as Trait&gt;::Hash, &lt;T as Trait&gt;::BlockNumber&gt;&gt; for Games&lt;T&gt;","synthetic":false,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt; for ForDappsEraReward&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance&gt; for ForSecurityEraReward&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StoragePrefixedMap&lt;u32&gt; for ErasStartSessionIndex","synthetic":false,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T:&nbsp;Trait&gt; StoragePrefixedMap&lt;Vec&lt;&lt;T as Trait&gt;::AccountId&gt;&gt; for ElectedValidators&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()